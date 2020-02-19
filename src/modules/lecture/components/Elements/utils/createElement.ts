import {
  Resistor,
  Transistor,
  Battery,
  Capacitor,
  Inductance
} from "../../../../draw";

export function createElement(type: string): any {
  const ELEMENTS: { [k: string]: any } = {
    resistor: Resistor,
    transistor: Transistor,
    battery: Battery,
    capacitor: Capacitor,
    inductance: Inductance
  };

  return ELEMENTS[type];
}
