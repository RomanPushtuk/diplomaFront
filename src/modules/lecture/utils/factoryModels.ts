import { ResistorModel } from "../models";

export function factoryModels(type: string) {
  const MODELS: { [k: string]: any } = {
    resistor: ResistorModel
  };

  const Constructor = MODELS[type];

  return new Constructor();
}
