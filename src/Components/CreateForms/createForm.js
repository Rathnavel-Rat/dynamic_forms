import React, {memo, useEffect, useReducer, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AddNewFormApiCAll, FetchCreatedFormAPICall,FetchBinaryDataApiCall} from "../Redux/CreatedForm/actions";
import {List, Card, Icon, Form, Modal, Button, Input, FormInput} from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import { useForm,Controller } from "react-hook-form";
import {modalReducer} from "../ModalReducer/ModalReducer";
import Axios from "../axiosConfig";
import {base64ToArrayBuffer} from "./utils";
import {useHistory} from "react-router-dom";



const CreateForm = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.createdForm)
    const history=useHistory()
    useEffect(()=> dispatch(FetchCreatedFormAPICall())
    ,[])

    return (
        <Segment verticalAlign="top"   fluid text  textAlign="center" >
            <List animated  >
            {data.data.map(e=>(
                <List.Item as={Card} >
                <List.Content floated="right" >
                    <Icon  name="edit"
                          onClick={()=>{
                                dispatch(FetchBinaryDataApiCall({"form_id":e.form_id})).
                                then(e=>{
                                    console.log(base64ToArrayBuffer(e.binaryData))
                                    history.push("/createForm","oojo")

                                })
                          }}  color="blue" />
                    <DeleteFormModal name={e.name}/>
                </List.Content>
                <ListsForms item={e}/>

            </List.Item>))}

            </List>
            <CreateFormModal dispatch={dispatch}/>
        </Segment>
    );
};
const ListsForms=memo(({item})=>{

    const [isIconEdit,setisIconEdit]=useState(false)
    const UpdateFormName=(data)=>{
        data["name"]=document.getElementById("newName").value
        Axios().patch("dynamicforms/updateName",data).then(e=>console.log(e)).catch(e=>console.log("lool",e))
    }
    return(
        <List.Content  floated="left"><Icon color="blue" name="dot circle"/>
        {!isIconEdit? item.name:
            <div>
                <input id="newName" style={{width:"100px",height:"q20px"}} type="text"  placeholder={item.name} defaultValue={item.name}/>
                 <Icon color={"green"} onClick={()=>{UpdateFormName({"form_id":item.form_id})}} name="save"/></div>}
                 {!isIconEdit ?
                                (<Icon onClick={()=>{setisIconEdit(!isIconEdit)}} name="edit"/>)
                              : (<Icon  onClick={()=>setisIconEdit(!isIconEdit)} name="delete" />)}

        </List.Content>
    )
})
export default CreateForm;

const CreateFormModal=({dispatch})=>{
    const{register,handleSubmit,control}=useForm()
    const[state,dispatches]=useReducer(modalReducer,{isOpen:false})
     const create=(data)=>{
        dispatch(AddNewFormApiCAll(data)).then(e=>dispatches({type:"CLOSE"})).catch(e=>{})
    }
    return(
        <Modal size={"tiny"} trigger={ <Button   color="blue"   circular icon={"add"} onClick={()=>dispatches({type:"OPEN"})} />} basic closeIcon  open={state.isOpen} onClose={()=>{dispatches({type:"CLOSE"})}}>
            <Modal.Header>Enter the name for your form</Modal.Header>
            <Form onSubmit={handleSubmit(create)}>
                <Controller  control={control} as={FormInput} type="text" name="name" ref={register({required:{value:true,message:"Required"}})}/>
            </Form>
            <Modal.Content ><Button size={5} positive onClick={handleSubmit(create)}>
                CREATE
            </Button></Modal.Content>
            <Modal.Actions >
                <Button negative onClick={() => dispatches({ type: 'CLOSE' })}>
                    CLOSE
                </Button>
            </Modal.Actions>
        </Modal>

    )
}

const DeleteFormModal=({name})=>{
    const[state,dispatches]=useReducer(modalReducer,{isOpen:false})
    return(
        <Modal trigger={<Icon name="delete" onClick={()=>{dispatches({type:"OPEN"})}} />} closeIcon   open={state.isOpen} onClose={()=>{dispatches({type:"CLOSE"})}}>
        <Modal.Header>Are sure you wanna delete</Modal.Header>
        <Modal.Description center>
         <h1> {name}</h1>
        </Modal.Description>
        <Modal.Content>
            <Button size={5} positive >
           Confrim Delete
        </Button></Modal.Content>
    </Modal>)
}