import { OutputModel } from "../models/OutputModel";

export function createOutputsModels(count: number): { [k: string]: any } {
  const map: { [k: string]: any } = {};

  for (let i = 0; i < count; i++) {
    const output = new OutputModel();

    map[output.id] = output;
  }

  return map;
}
