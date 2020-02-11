import { ICoord } from "../../../common/interfaces";
import { generateUniqueId } from "../../../common/utils";

export class ElementModel {
    private id: string = generateUniqueId();

    private coord: ICoord = { x: 0, y: 0 };

    public setCoord(coord: ICoord) {
        this.coord = coord;
    }

    public getId(id: string) {
        return this.id;
    }
}
