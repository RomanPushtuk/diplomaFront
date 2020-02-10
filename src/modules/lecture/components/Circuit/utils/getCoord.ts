import { MouseEvent } from "react";
import { CircuitPure } from "../CircuitPure";
import { ICoord } from "../../../../../common/interfaces";

export function getCoord(event: MouseEvent<any>, step: number = 1): ICoord {
  const CIRCUIT_COORD_RECT = CircuitPure.getCircuitBounding();

  if (CIRCUIT_COORD_RECT) {
    const x = event.clientX - CIRCUIT_COORD_RECT.left;
    const y = event.clientY - CIRCUIT_COORD_RECT.top;

    const coord = {
      x: x - (x % step),
      y: y - (y % step)
    };

    return coord;
  }

  return { x: 0, y: 0 };
}
