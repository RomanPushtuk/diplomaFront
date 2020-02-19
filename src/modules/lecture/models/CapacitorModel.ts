import { ElementModel } from "./ElementModel";
import { createOutputsModels } from "../utils";

export class CapacitorModel extends ElementModel {
  type: string = "capacitor";

  outputs: { [k: string]: any } = createOutputsModels(2);

  params: { [key: string]: any } = {
    capacity: 0
  };
}
