import { createFieldUUID } from "./utils"
import {Field,Radio,Number,Text,validator,Checkbox,DropDown,Date,Label,Range} from "./protobuf/Fields_pb"

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
            nField.setRenderFunc('RenderNumber')
            return nField;

        }
      this.GetText =function (isEmail) {
            const nText=new Text()
            nText.setLabel("Email ")
            const valid = new validator();
            valid.setValidation("true")
            valid.setError("not to be empty")
          const valid1 = new validator();
          valid1.setValidation("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$")
            valid1.setError("email id required")
            nText.getValidMap().set("required",valid);
            if(isEmail)
            nText.getValidMap().set("pattern",valid1)
            nText.setType("email")

            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setText(nText)
            nField.setRenderFunc('RenderText')
            return nField;

      }
      this.GetCheckBox=function () {
            const nChekBox=new Checkbox()
            nChekBox.setLabel("Enter you check box value")
            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setCheckbox(nChekBox)
            nField.setRenderFunc('RenderCheckBox')
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
            return nField;
      }
      this.GetDate=function () {
                const nDate=new Date()
                nDate.setLabel("Choose Your Date")
                const nField = new Field()
                nField.setUid(createFieldUUID())
                nField.setDate(nDate)
                nField.setRenderFunc('RenderDate')
          return nField;

      }
      this.GetLabel=function () {
            const  nlabel =new Label()
            nlabel.setValue("Enter some label text")
            const nField = new Field()
            nField.setUid(createFieldUUID())
            nField.setLabel(nlabel)
            nField.setRenderFunc('RenderLabel')

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
    
        return nField;
      }

    }
}


