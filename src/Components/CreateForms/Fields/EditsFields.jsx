import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {memo} from "react";
import {Memolabel,MemoRadio} from './MemoEditFields'
export class EditRenderField{
    constructor() {
        this.RenderLabel = function (item) {
            return <Memolabel item={item}/>
        }
        this.RenderRadio=function (item) {
            return <MemoRadio item={item}/>
        }
    }
}