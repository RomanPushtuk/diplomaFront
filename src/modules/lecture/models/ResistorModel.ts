import { ElementModel } from "./ElementModel";
import { createOutputsModels } from "../utils";

export class ResistorModel extends ElementModel {
  type: string = "resistor";

  name: string = "";

  outputs: { [k: string]: any } = createOutputsModels(2);

  params: { [key: string]: any } = {
    resist: 0
  };
}
