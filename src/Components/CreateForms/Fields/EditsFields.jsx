import {Memolabel, MemoNumber, MemoRadio,MemoCheckbox,MemoDropDown,MemoDate} from './MemoEditFields'
export class EditRenderField{
    constructor() {
        this.RenderLabel = (item)=> {return <Memolabel item={item}/>}
        this.RenderRadio=(item)=> {return <MemoRadio item={item}/>}
        this.RenderNumber=(item)=>{return <MemoNumber item={item}/>}
        this.RenderCheckBox=(item)=>{return<MemoCheckbox item={item}/>}
        this.RenderDropDown=(item)=>{return<MemoDropDown item={item}/>}
        this.RenderDate=(item)=>{return <MemoDate item={item}/>}
    }
}