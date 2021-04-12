export class LabelFromProto{
    constructor(){
        this.RenderRadio= function(item){
            return item.getRadio().getLabel().toString()
        }
        this.RenderNumber= function(item){
            return item.getNumber().getLabel().toString()
        }
        this.RenderText= function(item){
            return item.getText().getLabel().toString()
        }
        this.RenderEmail= function(item){
            return item.getText().getLabel().toString()
        }
        this.RenderCheckBox= function(item){
            return item.getCheckbox().getLabel().toString()
        }
        this.RenderDropDown= function(item){
            return item.getDropdown().getLabel().toString()
        }
        this.RenderDate= function(item){
            return item.getDate().getLabel().toString()
        }
        this.RenderRange= function(item){
            return item.getRange().getLabel().toString()
        }
        this.RenderImage= function(item){
            return item.getImage().getImagelabel().toString()
        }
        this.RenderTextArea= function(item){
            return item.getTextarea().getLabel().toString()
        }
        this.RenderFileUpload= function(item){
            return item.getFileupload().getLabel().toString()
        }
    }

}