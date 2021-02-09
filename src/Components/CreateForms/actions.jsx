import { createUUID } from "./protobuf/DummyData"
import {Field,Radio} from "./protobuf/Fields_pb"

export class GetAction {
    constructor() {
        this.GetRadio = function () {
            const nRadio = new Radio()
            nRadio.setNumofoption(4)
            nRadio.getValuesMap().set(1, "one")
            nRadio.getValuesMap().set(2, "two")
            nRadio.getValuesMap().set(3, "three")
            nRadio.getValuesMap().set(4, "four")
            nRadio.setLabel("enter the question")

            const nField = new Field()
            nField.setUid(createUUID())
            nField.setRadio(nRadio)
            nField.setRenderFunc('RenderRadio')
            
            return nField;

        }

    }
}


