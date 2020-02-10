import { ICoord } from "../../../../../common/interfaces";
import { ELEMENTS } from "../../../../../constants";

export function createElement(
  id: string,
  type: string,
  coord: ICoord,
  outputs: Object
): any {
  const constructorElement = ELEMENTS[type];

  return constructorElement(id, coord, outputs);
}
