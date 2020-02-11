import { ElementModel } from "./ElementModel";
import { createOutputsModels } from "../utils";

export class ResistorModel extends ElementModel {
  readonly type: string = "resistor";

  readonly outputs: { [k: string]: any } = createOutputsModels(2);

  readonly params: { [key: string]: any } = {
    resist: 0
  };

  setParam(name: string, value: number) {
    this.params[name] = value;
  }
}
