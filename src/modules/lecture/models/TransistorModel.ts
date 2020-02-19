import { ElementModel } from "./ElementModel";
import { createOutputsModels } from "../utils";

export class TransistorModel extends ElementModel {
  type: string = "transistor";

  name: string = "";

  outputs: { [k: string]: any } = createOutputsModels(3);

  params: { [key: string]: any } = {
    type: "npm"
  };
}
