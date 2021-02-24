import React, {memo, useReducer, useState} from 'react'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {DragEdit} from "../../Redux/DnDItems/action";
import {Form, Portal, Container, List, Icon, Button} from "semantic-ui-react";



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
    console.log("sd",Radio.getLabel())
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

