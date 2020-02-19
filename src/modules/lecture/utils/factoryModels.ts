import {
  ResistorModel,
  TransistorModel,
  BatteryModel,
  CapacitorModel,
  InductanceModel
} from "../models";

export function factoryModels(type: string) {
  const MODELS: { [k: string]: any } = {
    resistor: ResistorModel,
    transistor: TransistorModel,
    battery: BatteryModel,
    capacitor: CapacitorModel,
    inductance: InductanceModel
  };

  const Constructor = MODELS[type];

  if (Constructor) {
    return new Constructor();
  }
}
