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

  turn: Array<any> = [];

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

  popCircuit() {
    const circuit = this.undo.pop();

    this.turn.push(circuit);

    return circuit;
  }

  turnCircuit() {
    const circuit = this.turn.pop();

    return circuit;
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

  setTypeOutput(idOutput: string, type: string) {
    const output = this.getOutput(idOutput);

    output.setType(type);
  }

  getCountElementType(type: string): number {
    let count: number = 0;

    Object.keys(this.circuit).forEach(idElement => {
      const element = this.circuit[idElement];

      if (element.type === type) {
        count++;
      }
    });
    return count;
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

    Object.values(this.circuit).forEach(element => {
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

    Object.values(this.circuit).forEach(element1 => {
      const { type, params, outputs } = element1;

      Object.values(outputs).forEach((output1: any) => {
        output1.connections.forEach((output2: any) => {
          const element2 = this.getElementByOutputId(output2.id);

          if (element2) {
            const part1 = `${type}${JSON.stringify(params)}.${output1.type}`;
            const part2 = `${element2.type}${JSON.stringify(element2.params)}.${
              output2.type
            }`;
            const connect = `${part1}=${part2}`;

            connections.push(connect);
          }
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

        if (
          this.getElementByOutputId(output1.id) &&
          this.getElementByOutputId(output2.id)
        ) {
          connections.push({ startCoord, endCoord });
        }
      });
    });

    return connections;
  }

  getElementByOutputId(idOutput: string): any {
    let elementSearch = null;

    Object.values(this.circuit).forEach(element => {
      const { outputs } = element;

      Object.values(outputs).forEach((output: any) => {
        if (output.id === idOutput) {
          elementSearch = element;
        }
      });
    });

    return elementSearch;
  }

  getElementById(idElement: string) {
    return this.circuit[idElement];
  }

  getOutput(id: string) {
    let output: any = null;

    Object.values(this.circuit).forEach(({ outputs }) => {
      if (outputs[id]) {
        output = outputs[id];
      }
    });

    return output;
  }
}
