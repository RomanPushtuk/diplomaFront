import { store } from "../../../../../redux";
import { ICoord } from "../../../../../common/interfaces";

export const updateCoordOutput = (id: string, coord: ICoord) => {
  // @ts-ignore
  const lines = store.getState().lines.map((connect: any) => {
    return connect.map((output: any) => {
      if (output.id === id) {
        return (output.coord = coord);
      }
      return output;
    });
  });

  store.dispatch({ type: "UPDATE_COORD_OUTPUT", lines });
};
