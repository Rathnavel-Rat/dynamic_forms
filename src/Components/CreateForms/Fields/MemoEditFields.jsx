import React, {memo, useReducer, useState} from 'react'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {DragEdit} from "../../Redux/DnDItems/action";
import {Form, Portal, Button, Container, List, Icon, Image, Input} from "semantic-ui-react";
import Axios from "../../axiosConfig";

export const MemoText=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const [PortalOpen,setPortalOpen]=useState(false);
    const dispatch=useDispatch();
    const done=(e)=>{
        item.getText().setLabel(e.label)
        dispatch(DragEdit())
        setPortalOpen(false)

    }
    return(
        <div>
            <Form onSubmit={handleSubmit(done)}>
                <input ref={register({ required: true})} required name="label" placeholder={ "current value:"+item.getText().getLabel()}  />
                <input type="submit"  value="Save"/>
                <Portal open={PortalOpen} ><h1>✔</h1> </Portal>
            </Form>
        </div>)
})

export const Memolabel=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const [PortalOpen,setPortalOpen]=useState(false);
    const dispatch=useDispatch();
    const done=(e)=>{
     item.getLabel().setValue(e.label)
        dispatch(DragEdit())
        setPortalOpen(false)

    }

    return(
        <div>
        <Form onSubmit={handleSubmit(done)}>
        <input ref={register({ required: true})} required name="label" placeholder={ "current value:"+item.getLabel().getValue()}  />
        <input type="submit"  value="Save"/>
            <Portal open={PortalOpen} ><h1>✔</h1> </Portal>

        </Form>
    </div>)
})

export const MemoRadio=memo(function({item}){
    const {register,reset,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const Radio=item.getRadio()
    const AddValue=(e)=>{
        Radio.setLabel(e.label)
        Radio.addValues(e.val)
        reset()
        dispatch(DragEdit())
    }
    const setLabel=(e)=>{
        Radio.setLabel(e.label)
        dispatch(DragEdit())
    }
    const DeleteAnItemFromList=  (pos) => {
        const s = [...Radio.getValuesList().slice(0, pos).concat(Radio.getValuesList().slice(pos + 1, item.getRadio().getValuesList().length))]
        item.getRadio().clearValuesList()
        item.getRadio().setValuesList(s)
        reset()
         dispatch(DragEdit())
    }
      return(
          <div>
              <Form onSubmit={handleSubmit(setLabel)}>
                  <input type="text" defaultValue={Radio.getLabel()} placeholder={"current value:" + Radio.getLabel().toString()} name="label" ref={register()}/>
                  <input value={"change"} type="submit"/>
              </Form>
              <Form onSubmit={handleSubmit(AddValue)}>
              <Container>
                  <List >
                      {item.getRadio().getValuesList().map((e,i)=>(
                          <List.Item key={i} >
                              <Icon name='remove' onClick={()=>DeleteAnItemFromList(i)} color="blue"/>
                              <List.Content>
                                  {e}
                              </List.Content>

                          </List.Item>
                      ))}
                  </List>
              </Container>

                  <input ref={register()} required name="val" placeholder="Enter a value to add to list"  />
                  <input type="submit"  value="add"/>
              </Form>
          </div>
      )
})

export  const MemoNumber=memo(({item})=>{
    const {register,reset,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const Number=item.getNumber();
    const save=(e)=>{
        Number.setLabel(e.label)
        Number.setMax(e.maximum)
        Number.setMin(e.minimum)
        reset()
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(save)}>
                <input ref={register()} required name="label"  defaultValue={Number.getLabel().toString()}  />
                <input placeholder="min" defaultValue={`${Number.getMin()}`} name="minimum" type="number" ref={register({required:true})}   />
                <input placeholder="max" defaultValue={`${Number.getMax()}`} name="maximum" type="number" ref={register({required:true})}   />
                <input type="submit" />
            </Form>
        </div>
    )
})

export  const MemoCheckbox=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const CheckBox=item.getCheckbox();
    const Save=(e)=>{
        CheckBox.setLabel(e.checkbox)
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text" defaultValue={CheckBox.getLabel()} placeholder={"current value:"+CheckBox.getLabel().toString()}  name="checkbox" ref={register({required:true})}/>
                <input type="submit"/>
            </Form>
        </div>
    )
})
export  const MemoDropDown=memo(({item})=> {
    const {register, reset,handleSubmit} = useForm()
    const dispatch = useDispatch();
    const DropDown = item.getDropdown();

    const AddValue=(e)=>{
        DropDown.setLabel(e.dropdownLabel)
           DropDown.addItems(e.val)
        reset()
        dispatch(DragEdit())
    }
    const setLabel=(e)=>{
        DropDown.setLabel(e.dropdownLabel)
        dispatch(DragEdit())
    }
    const DeleteAnItemFromList=  (pos) => {
        const s = [...DropDown.getItemsList().slice(0, pos).concat(DropDown.getItemsList().slice(pos + 1, DropDown.getItemsList().length))]
        DropDown.clearItemsList()
        DropDown.setItemsList(s)
        reset()
        dispatch(DragEdit())
    }
    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit(setLabel)}>
                    <input type="text" defaultValue={DropDown.getLabel()} placeholder={"current value:" + DropDown.getLabel().toString()} name="dropdownLabel" ref={register({required: true})}/>
                    <input value={"change"} type="submit"/>
                </Form>
                <Form onSubmit={handleSubmit(AddValue)}>
                    <Container>
                        <List >
                            {DropDown.getItemsList().map((e,i)=>(
                                <List.Item key={i} >
                                    <Icon name='remove' onClick={()=>DeleteAnItemFromList(i)} color="blue"/>
                                    <List.Content>
                                        {e}
                                    </List.Content>

                                </List.Item>
                            ))}
                        </List>
                    </Container>
                    <input ref={register()} required name="val" placeholder="Enter a value to add to list"  />
                    <input value="add" type="submit"/>
                </Form>
            </div>
        </div>
    )
})


export  const MemoDate=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const Date=item.getDate();
    const Save=(e)=>{
        Date.setLabel(e.date)
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text" defaultValue={Date.getLabel()} placeholder={"current value:"+Date.getLabel().toString()}  name="date" ref={register({required:true})}/>
                <input type="submit"/>
            </Form>
        </div>
    )
})


export const MemoImage=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const nImage=item.getImage();
    const Save=(e)=>{
        item.getImage().setImagelabel(e.label);
        item.getImage().setSize(e.size);
        item.getImage().setIsRounded(e.rounded)
        item.getImage().setIsCircular(e.circular)
        dispatch(DragEdit())
    }
    const UploadFile=(e)=>{
        const formdata=new FormData()
        formdata.append("file",e.file[0])
        Axios().post("dynamicforms/FileUploadForm", formdata, {
                'Content-Type': 'multipart/form-data',
            }
        ).then(e=>{
                item.getImage().setImageurl((e.data["link"]))
                dispatch(DragEdit())
        }
        ).catch()

    }

    return(
        <div>
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text" defaultValue={nImage.getImagelabel()} placeholder={"current value:"+nImage.getImagelabel().toString()}  name="label" ref={register({required:true})}/>
                <select name="size"  ref={register({})}>
                    <option selected={"small"===nImage.getSize()}>small </option>
                    <option selected={"mini"===nImage.getSize()}>mini </option>
                    <option selected={"tiny"===nImage.getSize()}>tiny </option>
                    <option selected={"medium"===nImage.getSize()}>medium </option>
                    <option selected={"large"===nImage.getSize()}>large </option>
                    <option selected={"big"===nImage.getSize()}>big </option>
                    <option selected={"huge"===nImage.getSize()}>huge </option>
                    <option selected={"massive"===nImage.getSize()}>massive </option>
                </select>
                <input type="checkbox" ref={register({})} name="rounded"  defaultChecked={nImage.getIsRounded()}  />Rounded<br/>
                <input type="checkbox" ref={register({})} name="circular" defaultChecked={nImage.getIsCircular()}   />Circular
                <Image  rounded={nImage.getIsRounded()} circular={nImage.getIsCircular()} size={nImage.getSize()} src={nImage.getImageurl()} alt={nImage.getImagelabel()}/>
                <Input  type="submit" value={"update"}/>
            </Form>

        </div>
    <Form onSubmit={handleSubmit(UploadFile)} enctype="multipart/form-data">

        <input  name="file" ref={register({})} type="file"/>
        <Input  type="submit" value={"upload"}/>
    </Form>
        </div>
    )
})

export const MemoTextArea=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const nTextArea=item.getTextarea();
    const Save=(e)=>{
        item.getTextarea().setLabel(e.label)
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text" defaultValue={nTextArea.getLabel()} placeholder={"current value:"+nTextArea.getLabel().toString()}  name="label" ref={register({required:true})}/>
                <input type="submit"/>
            </Form>
        </div>
    )
})

export const MemoFileUpload=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const nFileUpload=item.getFileupload();
    const Save=(e)=>{
        item.getFileupload().setLabel(e.label)
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text" defaultValue={nFileUpload.getLabel()} placeholder={"current value:"+nFileUpload.getLabel().toString()}  name="label" ref={register({required:true})}/>
                <input type="submit"/>
            </Form>
        </div>
    )
})
export const MemoLink=memo(({item})=>{
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const nLink=item.getLink();
    const Save=(e)=>{
        item.getLink().setLabel(e.label)
        item.getLink().setUrl(e.url)
        item.getLink().setPopupString(e.popup)
        dispatch(DragEdit())
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(Save)}>
                <input type="text"  defaultValue={nLink.getLabel()} placeholder={"current value:"+nLink.getLabel().toString()}  name="label" ref={register({required:true})}/>
                <input type="text" name="url"  ref={register({required:true})} defaultValue={nLink.getUrl()}/>
                <textarea name="popup" placeholder={"popup string"} ref={register({required:true})}>
                    {nLink.getPopupString()}
                </textarea>
                <input type="submit"/>
            </Form>
        </div>
    )
})




