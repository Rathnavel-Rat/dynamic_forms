import React,{memo} from 'react'
import {Checkbox, Form, Label, Radio, Segment} from 'semantic-ui-react';
import FormInput from "semantic-ui-react/dist/commonjs/collections/Form/FormInput";
import {useFormContext} from "react-hook-form";
import {ConnectForm} from "./ConnectForm";


export class RenderProto{
  constructor(){
    this.RenderRadio= function(item){
      const arr=item.getRadio().getValuesList();

    return(
        <ConnectForm>
            {({ register })=>(

        <Form.Field  >
          <Label content={item.getRadio().getLabel()} />
    
           { 
           arr.map((e,i)=>(<Form.Input  ref={register({})} type="radio" key={i}  value={e} label={e}  name={item.getUid()}  />))
           }
       
        </Form.Field> )}
            </ConnectForm>
      
    )
    };
    this.RenderNumber=function (item) {
      return(
          <ConnectForm>
              {({register,control})=>(
          <Form.Input  ref={register({})}  width={5} label={item.getNumber().getLabel()}    name={item.getUid()} type="number" min={item.getNumber().getMin()} max={item.getNumber().getMax()}/>
              )}
          </ConnectForm>
      )
              }
    this.RenderText=function(item){

        return(
            <ConnectForm>
                {({register,control})=>(
                <Form.Input width={5} label={item.getText().getLabel()}  ref={register({})}   required/>)}
            </ConnectForm>
        )
    }
    this.RenderCheckBox=function (item) {
        return(
          <ConnectForm>
              {({register})=>(
        <Form.Checkbox  ref={register({})}  label={item.getCheckbox().getLabel()} name={item.getUid()}/>)}
          </ConnectForm>
        )

    }
    this.RenderDropDown=function (item) {
        let arr=[];
        item.getDropdown().getItemsList().forEach(e=>{
             arr.push({key:e,text:e,value:e})
            }
        );


        return(
            <ConnectForm>
                {({register})=>(
                <Form.Select width={5} ref={register({})}  renderLabel  label={item.getDropdown().getLabel()}  options={arr} name={item.getUid()}/>)}
            </ConnectForm>
        )

    }
    this.RenderDate= function(item){

        return(
            <ConnectForm>
                {({register})=>(
                <FormInput  width={5}  ref={register({})}  label={item.getDate().getLabel()} type="Date" name={item.getUid()} />)}
            </ConnectForm>
        )
    }

    this.RenderLabel=function (item) {
        return(
            <Form.Field>
                <Label content={item.getLabel().getValue()}/>
            </Form.Field>
        )

    }
    this.RenderRange=function(item){
        return(
            <div>
                 <Label content={item.getRange().getLabel()}/>
                 <input name={item.getUid()} min={item.getRange().getFrom()} max={item.getRange().getTo()} multiple={item.getRange().getMultiples()} />
            </div>
        )
    }



  }
}

