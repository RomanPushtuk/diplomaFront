import { generateUniqueId } from "../../../common/utils";

export function createOutputs(count: number): { [k: string]: any } {
  const map: { [k: string]: any } = {};

  for (let i = 0; i < count; i++) {
    const id = generateUniqueId();

    map[id] = {
      id,
      coord: { x: 0, y: 0 },
      connections: []
    };
  }

  return map;
}
