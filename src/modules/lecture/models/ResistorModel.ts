import {ICoord} from "../../../common/interfaces";
import { generateUniqueId } from "../../../common/utils";
import { createOutputs } from "../utils";

export class ResistorModel {
    private id: string = generateUniqueId();

    private type: string = "resistor";

    private coord: ICoord = { x: 0, y: 0 };

    private outputs: { [k: string]: any } = createOutputs(2);

    setCoord(coord: ICoord) {
        this.coord = coord;
    }

    getId(id: string) {
        return this.id;
    }
}
