import { ICoord } from "../../../common/interfaces";
import { generateUniqueId } from "../../../common/utils";

export class ElementModel {
  id: string = generateUniqueId();

  name: string = "";

  coord: ICoord = { x: 0, y: 0 };

  params: { [key: string]: any } = {};

  setCoord(coord: ICoord) {
    this.coord = coord;
  }

  setParam(name: string, value: number) {
    this.params[name] = value;
  }

  setName(name: string) {
    this.name = name;
  }
}
