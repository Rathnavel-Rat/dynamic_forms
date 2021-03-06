import {
    Memolabel,
    MemoNumber,
    MemoRadio,
    MemoCheckbox,
    MemoDropDown,
    MemoDate,
    MemoText,
    MemoImage,
    MemoTextArea, MemoFileUpload, MemoLink
} from './MemoEditFields'
export class EditRenderField{
    constructor() {
        this.RenderText=(item)=>{return <MemoText item={item}/>}
        this.RenderLabel = (item)=> {return <Memolabel item={item}/>}
        this.RenderRadio=(item)=> {return <MemoRadio item={item}/>}
        this.RenderNumber=(item)=>{return <MemoNumber item={item}/>}
        this.RenderCheckBox=(item)=>{return<MemoCheckbox item={item}/>}
        this.RenderDropDown=(item)=>{return<MemoDropDown item={item}/>}
        this.RenderDate=(item)=>{return <MemoDate item={item}/>}
        this.RenderImage=(item)=>{return <MemoImage item={item}/>}
        this.RenderTextArea=(item)=>{return <MemoTextArea item={item}/>}
        this.RenderFileUpload=(item)=>{return <MemoFileUpload item={item}/>}
        this.RenderLink=(item)=>{return <MemoLink item={item} />}
    }
}