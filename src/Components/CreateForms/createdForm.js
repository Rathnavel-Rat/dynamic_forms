import React, {Component, memo, useEffect, useReducer, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AddNewFormApiCAll, FetchCreatedFormAPICall,FetchBinaryDataApiCall} from "../Redux/CreatedForm/actions";
import {
    List,
    Grid,
    Icon,
    TransitionablePortal,
    Form,
    Modal,
    Button,
    FormInput,
    Container,
} from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import { useForm,Controller } from "react-hook-form";
import {modalReducer} from "../ModalReducer/ModalReducer";
import Axios from "../axiosConfig";
import {useHistory} from "react-router-dom";
import {CurrentForm} from "../Redux/currentForm/currentForm";
import {DeleteFormApiCall} from "../Redux/DeleteForm/action";
import {GetFormResponsesApiCall} from "../Redux/GetFormReponses/reducers";




const CreatedForm = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.createdForm)
    const history=useHistory()
    useEffect(()=> dispatch(FetchCreatedFormAPICall()),[])


    return (
        <Grid textAlign='center' verticalAlign='middle' >
            <Grid.Column as={Segment} raised  style={{maxWidth:"550px",marginTop:70}}>
        <Segment    fluid text  textAlign="center" >
            <List animated   >
            {data.data.map(e=>(
                <List.Item as={Container}  >
                <List.Content floated="right" >
                    <Icon  name="edit"
                          onClick={()=>{
                                dispatch(FetchBinaryDataApiCall({"form_id":e.form_id}))
                                    .then(e=>{
                                    dispatch(CurrentForm(e.data))
                                    history.push("/createForm")

                                })
                          }}  color="blue" />
                      <Copy access_id={e.access_id}/>
                      <Button content="Click To See Responses" icon="eye" onClick={()=>{
                           dispatch(GetFormResponsesApiCall({"form_id":e.form_id})).then().catch()
                          history.push("/ViewFormResponses")}}/>
                    <DeleteFormModal dispatch={dispatch} id={e.form_id} name={e.name}/>
                </List.Content>
                <EditNameForms item={e}/>

            </List.Item>))}

            </List>
            <CreateFormModal dispatch={dispatch}/>
        </Segment>
        </Grid.Column>
        </Grid>
    );
};
const EditNameForms=memo(({item})=>{

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
export default CreatedForm;

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

const DeleteFormModal=({dispatch,id,name})=>{
    const[state,dispatches]=useReducer(modalReducer,{isOpen:false})

    return(
        <Modal trigger={<Icon color="blue" name="delete" onClick={()=>{dispatches({type:"OPEN"})}} />} closeIcon   open={state.isOpen} onClose={()=>{dispatches({type:"CLOSE"})}}>
        <Modal.Header>Are sure you wanna delete</Modal.Header>
        <Modal.Description textAlign="center">
         <h1> {name}</h1>
        </Modal.Description>
        <Modal.Content>
            <Button size={5} positive  onClick={()=>dispatch(DeleteFormApiCall({"id":id})).then(_=>{dispatches({type:"CLOSE"})} )} >
           Confrim Delete
        </Button></Modal.Content>
    </Modal>)
}



const  Copy= ({access_id}) =>{
    function copyToClipboard(id){
        let copy = document.createElement("input");
        document.body.appendChild(copy);
        copy.setAttribute('value', id);
        copy.select();
        document.execCommand("copy");
        document.body.removeChild(copy);
    }
    const[state,dispatches]=useReducer(modalReducer,{isOpen:false})

        return (

                <TransitionablePortal
                    trigger={<Icon color="blue" name="clipboard" onClick={()=>{dispatches({type:"OPEN"});copyToClipboard(access_id)}} />}
                    onClose={()=>dispatches({type:"CLOSE"})}  open={state.isOpen}>
                    <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                        Form Access Id Copied to Clipboard
                    </Segment>
                </TransitionablePortal>
        )

}