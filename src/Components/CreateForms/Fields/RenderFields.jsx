import React from 'react'
import {Checkbox, Form, Label, Radio, Segment} from 'semantic-ui-react';
import FormInput from "semantic-ui-react/dist/commonjs/collections/Form/FormInput";



export class RenderProto{
  constructor(){
    this.RenderRadio= function(item){
      const arr=[];
      item.getRadio().getValuesMap().forEach(function(v, k) {
        arr.push(v)
    });
  
    return(
        <Form.Field  >
          <Label content={item.getRadio().getLabel()} />
    
           { 
           arr.map((e,i)=>(<Form.Input control="input" type="radio" key={i}   label={e}  name={item.getUid()}  />))
           }
       
        </Form.Field>
      
    )
    };
    this.RenderNumber=function (item) {
      return(          
          <Form.Input width={5} label={item.getNumber().getLabel()}  type="number" min={item.getNumber().getMin()} max={item.getNumber().getMax()}/>)
    }
    this.RenderText=function(item){

        return( 
                <Form.Input width={5} label={item.getText().getLabel()}    required></Form.Input>
        )
    }
    this.RenderCheckBox=function (item) {
        return(
        <Form.Checkbox   label={item.getCheckbox().getLabel()} name={item.getUid()}/>)

    }
    this.RenderDropDown=function (item) {
        let arr=[];
        item.getDropdown().getItemsList().forEach(e=>{
             arr.push({key:e,text:e,value:e})
            }
        );


        return(
                <Form.Select width={5} renderLabel  label={item.getDropdown().getLabel()}  options={arr} name={item.getUid()}/>
        )

    }
    this.RenderDate= function(item){

        return(
                <FormInput width={5} label={item.getDate().getLabel()} type="Date" name={item.getUid()} />
        )
    }

    this.RenderLabel=function (item) {
        return(
            <Form.Field>
                <Label content={item.getLabel().getValue()}/>
            </Form.Field>
        )

    }



  }
}