import { ElementModel } from "./ElementModel";
import { createOutputsModels } from "../utils";

export class BatteryModel extends ElementModel {
  type: string = "battery";

  outputs: { [k: string]: any } = createOutputsModels(2);

  params: { [key: string]: any } = {
    voltage: 4.5
  };
}
