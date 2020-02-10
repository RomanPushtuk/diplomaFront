export const getRelativeCircuitCoord = (event: any, step: number = 1) => {
  // @ts-ignore
  const CIRCUIT_COORD_RECT = document
    .getElementById("CIRCUIT")
    .getBoundingClientRect();
  const x = event.clientX - CIRCUIT_COORD_RECT.left;
  const y = event.clientY - CIRCUIT_COORD_RECT.top;

  const coord = {
    x: x - (x % step),
    y: y - (y % step)
  };

  return coord;
};
