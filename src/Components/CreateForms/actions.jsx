import { createFieldUUID } from "./utils"
import {Field,Radio,Number,Text,validator,Checkbox,DropDown,Date,Label,Range,Image,TextArea,FileUpload,Link} from "./protobuf/Fields_pb"

export class GetAction {
    constructor() {
        this.GetRadio = function () {
            const nRadio = new Radio()
            nRadio.setNumofoption(4)
            nRadio.addValues("one")
            nRadio.addValues( "two")
            nRadio.addValues("three")
            nRadio.addValues( "four")
            nRadio.setLabel("enter the question")

            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setRadio(nRadio)
            nField.setIsRequired(false)
            nField.setRenderFunc('RenderRadio')
            return nField;
        }
        this.GetNumber=function () {
            const  nNumber=new Number()
            nNumber.setLabel("enter the min and max for number Field");
            nNumber.setMin(0)
            nNumber.setMax(100)

            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setNumber(nNumber)
            nField.setIsRequired(false)
            nField.setRenderFunc('RenderNumber')
            return nField;

        }
      this.GetText =function (isEmail) {
          const nField = new Field()
          nField.setUid(createFieldUUID())
            const nText=new Text()
          const valid = new validator();
            valid.setValidation("true")
            valid.setError("not to be empty")

          const valid1 = new validator();
            valid1.setValidation("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$")
            valid1.setError("email id required")
            nText.getValidMap().set("required",valid);
            if(isEmail) {
                nText.getValidMap().set("pattern", valid1)
                nText.setType("email")
                nText.setLabel("E-mail")
                nField.setRenderFunc('RenderEmail')
            }
            else{
                nText.setType("Text")
                nText.setLabel("Enter your Text")
                nField.setRenderFunc('RenderText')
            }

            nField.setText(nText)
            nField.setIsRequired(false)

            return nField;

      }
      this.GetCheckBox=function () {
            const nChekBox=new Checkbox()
            nChekBox.setLabel("Enter you check box value")
            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setCheckbox(nChekBox)
            nField.setRenderFunc('RenderCheckBox')
            nField.setIsRequired(false)
            return nField;

      }
      this.GetDrop=function () {
                const nDropDown=new DropDown()
                nDropDown.setLabel("Edit ur own text")
                nDropDown.addItems("one")
                nDropDown.addItems("two")
                const nField = new Field()
                nField.setUid(createFieldUUID())
                nField.setDropdown(nDropDown)
                nField.setRenderFunc('RenderDropDown')
                nField.setIsRequired(false)
            return nField;
      }
      this.GetDate=function () {
                const nDate=new Date()
                nDate.setLabel("Choose Your Date")
                const nField = new Field()
                nField.setUid(createFieldUUID())
                nField.setDate(nDate)
                nField.setRenderFunc('RenderDate')
                nField.setIsRequired(false)
          return nField;

      }
      this.GetLabel=function () {
            const  nlabel =new Label()
            nlabel.setValue("Enter some label text")
            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setLabel(nlabel)
            nField.setRenderFunc('RenderLabel')
          nField.setIsRequired(false)

        return nField;
      }
      this.GetRange=function(){
        const nRange =new Range()
        nRange.setFrom(0)
        nRange.setTo(100)
        nRange.setMultiples(1)
        nRange.setLabel("Enter the label or text for Range")
        const nField = new Field()
        nField.setUid(createFieldUUID())
        nField.setRange(nRange)
        nField.setRenderFunc('RenderRange')
          nField.setIsRequired(false)
    
        return nField;
      }
      this.GetImage=function () {
            const nImage=new Image()
            nImage.setImagelabel("Enter Your Image Description");
            nImage.setImageurl("https://react.semantic-ui.com/images/wireframe/image.png")
            nImage.setSize("small")
            nImage.setIsRounded(false)
            nImage.setIsCircular(false)
            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setImage(nImage)
            nField.setRenderFunc('RenderImage')
          nField.setIsRequired(false)
          return nField;


      }
     this.GetTextArea=function(){
        const nTextArea=new TextArea()
         nTextArea.setLabel("Enter your Label here")
         const nField = new Field()
         nField.setUid(createFieldUUID())
         nField.setTextarea(nTextArea)
         nField.setRenderFunc('RenderTextArea')
         nField.setIsRequired(false)
         return nField;
     }
     this.GetFileUpload=function () {
        const nFileUpload=new FileUpload()
         nFileUpload.setLabel("Enter ur your Label here")
         const nfield=new Field()
         nfield.setUid(createFieldUUID()+"file")
         nfield.setFileupload(nFileUpload)
         nfield.setRenderFunc("RenderFileUpload")
         nfield.setIsRequired(true)
         return nfield;


     }
     this.GetLink=function () {
            const nLink=new Link()
            nLink.setUrl("https://www.google.com")
            nLink.setLabel("Google")
            nLink.setPopupString("Link to google")
         const nfield=new Field()
         nfield.setUid(createFieldUUID())
         nfield.setLink(nLink)
         nfield.setRenderFunc("RenderLink")
         nfield.setIsRequired(false)
         return nfield;
     }

    }
}


