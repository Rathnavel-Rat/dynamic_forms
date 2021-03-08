import React, {memo, useReducer, useState} from 'react'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {DragEdit} from "../../Redux/DnDItems/action";
import {Form, Portal, Container, List, Icon, Button} from "semantic-ui-react";

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
    const DeleteAnItemFromList=  (pos) => {
        const s = [...Radio.getValuesList().slice(0, pos).concat(Radio.getValuesList().slice(pos + 1, item.getRadio().getValuesList().length))]
        item.getRadio().clearValuesList()
        item.getRadio().setValuesList(s)
        reset()
         dispatch(DragEdit())
    }
      return(
          <div>
              <Form onSubmit={handleSubmit(AddValue)}>
                  <input name="label" defaultValue={Radio.getLabel()}  ref={register()}   placeholder={"current value:"+Radio.getLabel().toString()}/>
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

                  <input ref={register({ required: true})} required name="val" placeholder="Enter a value to add to list"  />
                  <input type="submit"  value="Save"/>
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

export  const MemoCheckbox=({item})=>{
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
}
export  const MemoDropDown=({item})=> {
    const {register, reset,handleSubmit} = useForm()
    const dispatch = useDispatch();
    const DropDown = item.getDropdown();

    const AddValue=(e)=>{
        DropDown.setLabel(e.dropdownLabel)
        DropDown.addItems(e.val)
        reset()
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
                <Form onSubmit={handleSubmit(AddValue)}>
                    <input type="text" defaultValue={DropDown.getLabel()} placeholder={"current value:" + DropDown.getLabel().toString()} name="dropdownLabel" ref={register({required: true})}/>
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
                    <input ref={register({ required: true})} required name="val" placeholder="Enter a value to add to list"  />
                    <input type="submit"/>
                </Form>
            </div>
        </div>
    )
}


export  const MemoDate=({item})=>{
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
}
