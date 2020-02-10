import React, { PureComponent, DragEvent, MouseEvent, RefObject } from "react";
import { MODELS } from "../../models";
import { ICoord, IElement } from "../../../../common/interfaces";
import { Line, Rect } from "../../../draw";
import { Elements } from "../Elements";
import { Lines } from "../Lines";
import { getCoord } from "./utils";
import { CircuitModel } from "./CircuitModel";

interface State {
  startCoord: ICoord | null;
  endCoord: ICoord | null;
  circuit: { [k: string]: any };
}

const circuitModel = new CircuitModel();

export class CircuitPure extends PureComponent<any, State> {
  state = {
    startCoord: null,
    endCoord: null,
    circuit: {}
  };

  // Нужен для определения координат мыши
  static getCircuitBounding() {
    const { current } = this.circuitRef;

    if (current) return current.getBoundingClientRect();
    return null;
  }

  /* Все действия в грачическом редакторе завязаны на этом методе,
   * в зависимости от типа события в this.action мы выполняем действия */
  handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
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
  handleDrop = (event: DragEvent<HTMLDivElement>) => {
    const elementType = event.dataTransfer.getData("text");
    const ModelConstructor = MODELS[elementType]; // Получаем нужный нам конструктор
    const element = new ModelConstructor();
    const coord = getCoord(event);

    element.setCoord(coord);
    this.eddElement(element);
  };

  connectOutputs = (id: string) => {
    const output1 = circuitModel.getOutput(id);
    const output2 = circuitModel.getOutput(this.action.id);

    circuitModel.connectOutputs(output1, output2);
    this.setState({ circuit: circuitModel.getCircuit() });
  };

  /* Начинаем перетаскивание элемента */
  startDragging = (id: string) => {
    this.action = {
      type: "DRAGGING",
      id
    };
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
  startDrawingRect = (event: MouseEvent<HTMLDivElement>) => {
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

  /* Изменяем позиция на схеме */
  changePosition = (id: string, coord: ICoord) => {
    circuitModel.changePosition(id, coord);
    const newCircuit = circuitModel.getCircuit();

    this.setState({ circuit: newCircuit }); // Перерендер с новыми данными
  };

  action: any = null;

  static circuitRef: RefObject<HTMLDivElement> = React.createRef();

  render() {
    const { startCoord, endCoord, circuit } = this.state;

    const isConnecting = !!(this.action && this.action.type === "CONNECTING");
    const isSelecting = !!(this.action && this.action.type === "SELECTING");

    return (
      <div
        onDrop={this.handleDrop}
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.startDrawingRect}
        onMouseUp={this.clearAction}
        onDragOver={e => e.preventDefault()}
        ref={CircuitPure.circuitRef}
        className="circuit"
      >
        <svg className="circuit-svg">
          {isConnecting && <Line startCoord={startCoord} endCoord={endCoord} />}
          {isSelecting && <Rect startCoord={startCoord} endCoord={endCoord} />}
          <Elements
            circuit={circuit}
            startDragging={this.startDragging}
            startDrawingLine={this.startDrawingLine}
            connectOutputs={this.connectOutputs}
          />
          <Lines connects={circuitModel.getConnections()} />
        </svg>
      </div>
    );
  }
}
