import { ICoord, IElement } from "../../../../common/interfaces";

interface ICircuitModel {
  circuit: Object;
  undo: Array<any>;
  getCircuit: () => any;
  setCircuit: (circuit: Object) => void;
  pushCircuit: (circuit: Object) => void;
  eddElement: (element: IElement) => void;
  changePosition: (id: string, coord: ICoord) => void;
}

export class CircuitModel implements ICircuitModel {
  static instance: CircuitModel = new CircuitModel();

  constructor() {
    if (CircuitModel.instance) {
      return CircuitModel.instance;
    }
  }

  circuit: { [k: string]: any } = {};

  undo: Array<any> = [];

  getCircuit() {
    return this.circuit;
  }

  setCircuit(circuit: Object) {
    this.circuit = { ...circuit };
  }

  /* Добавляем нашу схему в стек */
  pushCircuit(circuit: Object) {
    this.undo.push({ ...circuit });
  }

  /* Добавляем элемент в схему */
  eddElement(element: IElement) {
    const elementId = element.getId();
    const map: { [k: string]: any } = {};

    map[elementId] = element;
    this.pushCircuit(this.circuit); // Сохраняем состояние
    const circuit = { ...this.circuit, ...map };

    this.setCircuit(circuit);
  }

  setCoordOutput(idOutput: string, coord: ICoord) {
    Object.keys(this.circuit).forEach(idElement => {
      const { outputs }: { [k: string]: any } = this.circuit[idElement];

      if (outputs[idOutput]) {
        outputs[idOutput].coord = coord;
      }
    });
  }

  getOutputs(): Array<any> {
    const outputs: any = [];

    Object.keys(this.circuit).forEach((idElement: string) => {
      const element = this.circuit[idElement];
      const mapOutputs = element.outputs;

      Object.keys(mapOutputs).forEach(idOutput => {
        outputs.push({ id: idOutput, ...mapOutputs[idOutput] });
      });
    });

    return outputs;
  }

  connectOutputs(output1: any, output2: any) {
    output1.connections.push(output2);
    output2.connections.push(output1);
  }

  getStringShape() {
    const connections: Array<string> = [];

    Object.keys(this.circuit).forEach(idElement => {
      const { type, params, outputs } = this.circuit[idElement];

      Object.keys(outputs).forEach(idOutput => {
        outputs[idOutput].connections.forEach((output: any) => {
          const element = this.getElementByOutputId(output.id);
          const connect = `${type}${JSON.stringify(params)}.${idOutput}=${
            element.type
          }${JSON.stringify(element.params)}.${output.id}`;

          connections.push(connect);
        });
      });
    });

    return connections;
  }

  /* Изменяем позицию на схеме */
  changePosition(id: string, coord: ICoord) {
    const element = this.circuit[id];

    element.setCoord(coord);
    const map: { [k: string]: any } = {};

    map[id] = element;
    this.setCircuit({ ...this.circuit, ...map });
  }

  getConnections() {
    const connections: any = [];
    const outputs = this.getOutputs().filter(
      output => output.connections.length > 0
    );

    outputs.forEach(output1 => {
      const startCoord = output1.coord;

      output1.connections.forEach((output2: any) => {
        const endCoord = output2.coord;

        connections.push({ startCoord, endCoord });
      });
    });

    return connections;
  }

  getElementByOutputId(idOutput: string): any {
    let element = {};

    Object.keys(this.circuit).forEach(idElement => {
      const { outputs } = this.circuit[idElement];

      Object.keys(outputs).forEach(idOutputSearch => {
        if (idOutputSearch === idOutput) {
          element = this.circuit[idElement];
        }
      });
    });

    return element;
  }

  getElementById(idElement: string) {
    return this.circuit[idElement];
  }

  getOutput(id: string) {
    let output: any = null;

    Object.keys(this.circuit).forEach(idElement => {
      const element = this.circuit[idElement];

      if (element.outputs[id]) {
        output = element.outputs[id];
      }
    });

    return output;
  }
}
