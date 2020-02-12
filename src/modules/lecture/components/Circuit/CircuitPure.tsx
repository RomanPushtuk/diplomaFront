import React, { PureComponent, DragEvent, MouseEvent, RefObject } from "react";
import { ICoord, IElement } from "../../../../common/interfaces";
import { Line, Rect } from "../../../draw";
import { Elements } from "../Elements";
import { Lines } from "../Lines";
import { getCoord, factoryModels } from "../../utils";
import { Pull } from "../ Pull";
import { CircuitModel } from "./CircuitModel";
import { TopControl } from "../TopControl";
import { BottomControl } from "../BottomControl";
import { ElementList } from "../ElementList";
import { Form } from "../Form";

interface State {
  startCoord: ICoord | null;
  endCoord: ICoord | null;
  circuit: { [k: string]: any };
  widthForm: number;
  widthElements: number;
}

interface Props {
  addToForm: (idElement: string, name: string, params: any) => void;
  circuit: any;
}

const circuitModel = new CircuitModel();

export class CircuitPure extends PureComponent<Props, State> {
  state = {
    startCoord: null,
    endCoord: null,
    widthForm: 210,
    widthElements: 105,
    circuit: {}
  };

  // Нужен для определения координат мыши
  static getCircuitBounding() {
    const { current } = this.circuitRef;

    if (current) return current.getBoundingClientRect();
    return null;
  }

  componentDidMount(): void {
    this.setState({ circuit: { ...circuitModel.getCircuit() } });
  }

  /* Все действия в грачическом редакторе завязаны на этом методе,
   * в зависимости от типа события в this.action мы выполняем действия */
  handleMouseMove = (event: MouseEvent<any>) => {
    const coord = getCoord(event);

    if (this.action) {
      const { type, id, startCoord } = this.action;

      switch (type) {
        case "DRAGGING":
          return this.changePosition(id, coord); // Меняем координаты элемента

        case "CONNECTING":
          return this.drawLine(startCoord, coord); // Рисуем линию для соединения

        case "SELECTING":
          return this.drawRect(startCoord, coord); // Рисуем прямоугольник выделения

        default:
          return null;
      }
    }

    return null;
  };

  /* К нам прилетел элемент */
  handleDrop = (event: DragEvent<any>) => {
    const elementType = event.dataTransfer.getData("text");
    const element = factoryModels(elementType);
    const coord = getCoord(event);

    element.setCoord(coord);
    const count = circuitModel.getCountElementType(elementType) + 1;

    element.setName(`${elementType}${count}`);
    this.eddElement(element);
  };

  connectOutputs = (id: string) => {
    const output1 = circuitModel.getOutput(id);
    const output2 = circuitModel.getOutput(this.action.id);

    circuitModel.connectOutputs(output1, output2);
    console.log(circuitModel.getStringShape());
    this.setState({ circuit: circuitModel.getCircuit() });
  };

  /* Начинаем перетаскивание элемента и добавляем информацию об элементе в форму */
  startDragging = (id: string) => {
    const { addToForm } = this.props;

    this.action = {
      type: "DRAGGING",
      id
    };

    const element = circuitModel.getElementById(id);

    addToForm(id, element.name, element.params);
  };

  /* Начинаем отрисовку соединяющей линии */
  startDrawingLine = (event: MouseEvent<any>, id: string) => {
    const startCoord = getCoord(event);

    this.action = {
      type: "CONNECTING",
      startCoord,
      id
    };
  };

  /* Начинаем отрисовку выделенной области */
  startDrawingRect = (event: MouseEvent<any>) => {
    const startCoord = getCoord(event);

    this.action = {
      type: "SELECTING",
      startCoord
    };
  };

  /* Завершаем вышеперечисленные действия */
  clearAction = () => {
    this.action = null;
    this.setState({ startCoord: null, endCoord: null });
  };

  /* Отрисовываем линию которая соединяет два элемента */
  drawLine(startCoord: ICoord, endCoord: ICoord) {
    this.setState({ startCoord, endCoord });
  }

  /* Отрисовываем область когда производим выделение */
  drawRect(startCoord: ICoord, endCoord: ICoord) {
    this.setState({ startCoord, endCoord });
  }

  /* Добавляем элемент в схему */
  eddElement(element: IElement) {
    circuitModel.eddElement(element);
    const newCircuit = circuitModel.getCircuit();

    this.setState({ circuit: newCircuit }); // Перерендер с новыми данными
  }

  undo = () => {
    const popCircuit = circuitModel.popCircuit();

    circuitModel.setCircuit(popCircuit);
    this.setState({ circuit: popCircuit });
  };

  turn = () => {
    const turnCircuit = circuitModel.turnCircuit();

    circuitModel.setCircuit(turnCircuit);
    this.setState({ circuit: turnCircuit });
  };

  /* Изменяем позиция на схеме */
  changePosition = (id: string, coord: ICoord) => {
    circuitModel.changePosition(id, coord);
    const newCircuit = circuitModel.getCircuit();

    circuitModel.setCircuit(newCircuit);
    this.setState({ circuit: newCircuit }); // Перерендер с новыми данными
  };

  handlePullDrag = (event: MouseEvent<any>) => {
    const x = event.clientX - 38;

    if (this.pullType === "form") {
      this.setState({ widthForm: -x });
    }
    if (this.pullType === "elements") {
      this.setState({ widthElements: x });
    }
  };

  finishPullDrag = (event: MouseEvent<any>) => {
    this.pullType = "";
  };

  startPull = (type: string) => {
    this.pullType = type;
  };

  pullType: string = "";

  action: any = null;

  static circuitRef: RefObject<any> = React.createRef();

  render() {
    const {
      startCoord,
      endCoord,
      widthForm,
      widthElements,
      circuit
    } = this.state;

    const isConnecting = !!(this.action && this.action.type === "CONNECTING");
    const isSelecting = !!(this.action && this.action.type === "SELECTING");

    return (
      <div>
        <TopControl undo={this.undo} turn={this.turn} />
        <div
          onMouseMove={this.handlePullDrag}
          onMouseUp={this.finishPullDrag}
          className="draw-area"
        >
          <ElementList width={widthElements} />
          <Pull type="elements" puller={this.startPull} />
          <svg
            onDrop={this.handleDrop}
            onMouseMove={this.handleMouseMove}
            onMouseDown={this.startDrawingRect}
            onMouseUp={this.clearAction}
            onDragOver={e => e.preventDefault()}
            ref={CircuitPure.circuitRef}
            className="circuit-svg circuit"
          >
            {isConnecting && (
              <Line startCoord={startCoord} endCoord={endCoord} />
            )}
            {isSelecting && (
              <Rect startCoord={startCoord} endCoord={endCoord} />
            )}
            {!!circuit && (
              <Elements
                circuit={circuit}
                startDragging={this.startDragging}
                startDrawingLine={this.startDrawingLine}
                connectOutputs={this.connectOutputs}
              />
            )}
            <Lines connects={circuitModel.getConnections()} />
          </svg>
          <Pull type="form" puller={this.startPull} />
          <Form width={widthForm} />
        </div>
        <BottomControl isSolved />
      </div>
    );
  }
}
