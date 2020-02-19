import { createOutputsModels } from "../utils";
import { ElementModel } from "./ElementModel";

export class InductanceModel extends ElementModel {
  type: string = "inductance";

  name: string = "";

  outputs: { [k: string]: any } = createOutputsModels(2);

  params: { [key: string]: any } = {
    inductance: 0
  };
}
