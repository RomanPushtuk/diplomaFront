import { stackCircuit } from "./stackCircuit";

export const pushStackCircuit = (circuit: any) => {
  // @ts-ignore
  stackCircuit.push(circuit);
  return circuit;
};
