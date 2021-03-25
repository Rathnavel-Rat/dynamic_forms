import React from 'react'
import {Checkbox, Form, FormCheckbox, Image, Label, Radio, Segment} from 'semantic-ui-react';
import FormInput from "semantic-ui-react/dist/commonjs/collections/Form/FormInput";
import {ConnectForm} from "./ConnectForm";
import {Controller} from "react-hook-form";



export class RenderProto{
  constructor(){
    this.RenderRadio= function(item){
      const arr=item.getRadio().getValuesList();

    return(
        <ConnectForm>
            {({ register,setValue,trigger,control })=>(

                <Form.Field>
                    <Label content={item.getRadio().getLabel()} />
                    {
                        arr.map((e,i)=>(
                            <div><input  ref={register({})} type="radio" key={i}  value={e}   name={item.getUid()}/>
                                <label htmlFor={e}>{e}</label>
                            </div>
                            ))

                    }

                </Form.Field> )}
        </ConnectForm>


    )
    };
    this.RenderNumber=function (item) {
      return(
          <ConnectForm>
              {({register,control})=>(
          <Controller control={control}  defaultValue="" as={FormInput} ref={register({})}  width={5} label={item.getNumber().getLabel()}    name={item.getUid()} type="number" min={item.getNumber().getMin()} max={item.getNumber().getMax()}/>
              )}
          </ConnectForm>
      )
              }
    this.RenderText=function(item){

        return(
            <ConnectForm>
                {({register,control})=>(
                       <Controller control={control}  defaultValue="" as={FormInput} width={5} name={item.getUid()} label={item.getText().getLabel()}  ref={register({})}   />

                )}
            </ConnectForm>
        )
    }
    this.RenderEmail=function (item) {
        {
            return(
                <ConnectForm>
                    {({register,control})=>(
                        <Controller control={control} as={Form.Input} defaultValue="" type="email" width={5} name={item.getUid()} label={item.getText().getLabel()}  ref={register({})}   />
                    )}
                </ConnectForm>
            )
        }

    }
    this.RenderCheckBox=function (item) {

        return(
          <ConnectForm>
              {({register,trigger,setValue})=>(
                  <Form.Checkbox
                      name={item.getUid()}
                      ref={register({name:item.getUid()})}
                      label="I agree to the Terms and Conditions"
                      onChange={async (e, { name, checked }) => {
                          setValue(name, checked);
                          await trigger({ name });
                      }}
                  />

                  )}
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
                {({register,control,setValue,trigger})=>(
                <Form.Select defaultValue="" width={5} ref={register({name:item.getUid()})}
                             onChange={async (e, { name, value }) => {
                                 setValue(name, value);
                                 await trigger({ name });
                             }}
                             label={item.getDropdown().getLabel()} type="select"  options={arr} name={item.getUid()}/>)}
            </ConnectForm>
        )

    }
    this.RenderDate= function(item){

        return(
            <ConnectForm>
                {({register,control})=>(
                <Controller control={control} as={Form.Input} defaultValue=""  width={5}  ref={register({})}  label={item.getDate().getLabel()} type="Date" name={item.getUid()} />)}
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
    this.RenderImage=function(item){
        return(
            <div>
                <Label content={item.getImage().getImagelabel()}/>
                <Image size={item.getImage().getSize()} src={item.getImage().getImageurl()} rounded={item.getImage().setIsRounded()} circular={item.getImage().setIsCircular()}/>
            </div>
        )
    }



  }
}



