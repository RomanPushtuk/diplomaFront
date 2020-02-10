import { CircuitPure } from "../../lecture/components/Circuit/CircuitPure";
import { ICoord } from "../../../common/interfaces";

export function getCenter(element: HTMLElement): ICoord {
  const scheme = CircuitPure.getCircuitBounding();
  const bounding = element.getBoundingClientRect();

  if (scheme && scheme.left && scheme.top) {
    const centerX = bounding.left - scheme.left + bounding.width / 2;
    const centerY = bounding.top - scheme.top + bounding.height / 2;

    return {
      x: centerX,
      y: centerY
    };
  }

  return {
    x: 0,
    y: 0
  };
}
