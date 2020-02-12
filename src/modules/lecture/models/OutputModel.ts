import { generateUniqueId } from "../../../common/utils";
import { ICoord } from "../../../common/interfaces";

export class OutputModel {
  id: string = generateUniqueId();

  coord: ICoord = { x: 0, y: 0 };

  connections: Array<any> = [];

  type: string = "";

  setType(type: string) {
    this.type = type;
  }
}
