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
                            <div><input required={item.getIsRequired()}  ref={register({})} type="radio" key={i}  value={e}   name={item.getUid()}/>
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
          <Controller control={control}  required={item.getIsRequired()}   defaultValue="" as={FormInput} ref={register({})}  width={5} label={item.getNumber().getLabel()}    name={item.getUid()} type="number" min={item.getNumber().getMin()} max={item.getNumber().getMax()}/>
              )}
          </ConnectForm>
      )
              }
    this.RenderText=function(item){

        return(
            <ConnectForm>
                {({register,control})=>(
                       <Controller control={control} required={item.getIsRequired()}   defaultValue="" as={FormInput} width={5} name={item.getUid()} label={item.getText().getLabel()}  ref={register({required:{value: item.getIsRequired(),message:"" }})}   />

                )}
            </ConnectForm>
        )
    }
    this.RenderEmail=function (item) {
        {
            return(
                <ConnectForm>
                    {({register,control})=>(
                        <Controller control={control} as={Form.Input} defaultValue="" type="email" width={5} name={item.getUid()} label={item.getText().getLabel()}  ref={register({required:{value: item.getIsRequired(),message:"" }})}   />
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
                <Form.Select defaultValue="" width={5} ref={register({name:item.getUid(),required:{value: item.getIsRequired(),message:"" }})}
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
                <Controller control={control} as={Form.Input} required={item.getIsRequired()} defaultValue=""  width={5}  ref={register({required:{value: item.getIsRequired(),message:"" }})}  label={item.getDate().getLabel()} type="Date" name={item.getUid()} />)}
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
                 <input  name={item.getUid()} min={item.getRange().getFrom()} max={item.getRange().getTo()} multiple={item.getRange().getMultiples()} />
            </div>
        )
    }
    this.RenderImage=function(item){
        console.log(item.getImage().getIsRounded(),"kk")
        return(
            <div>
                <Label content={item.getImage().getImagelabel()}/>
                <Image  size={item.getImage().getSize()} src={item.getImage().getImageurl()} rounded={item.getImage().getIsRounded()} circular={item.getImage().getIsCircular()}/>
            </div>
        )
    }
    this.RenderTextArea=function(item){
        return(
            <div>
                <ConnectForm>
                    {({register,control})=>(
                        <Controller control={control} as={Form.TextArea} defaultValue=""  width={10}  ref={register({required:{value: item.getIsRequired(),message:"" }})}  label={item.getTextarea().getLabel()}  name={item.getUid()} />)}
                </ConnectForm>
            </div>
        )
    }
    this.RenderFileUpload=function(item){

        return(
            <div>
                <Label content={item.getFileupload().getLabel()}/>
                <ConnectForm>
                    {({register,control})=>(
                        <input type="file" required={item.getIsRequired()} defaultValue=""  width={10}  ref={register({required:{value: item.getIsRequired(),message:"" }})}   name={item.getUid()} />)}
                </ConnectForm>
            </div>
        )
    }



  }
}



