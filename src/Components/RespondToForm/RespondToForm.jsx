import React, { memo,useReducer, useState} from 'react';
import {
    Button,
    Container,
    Divider,
    Form,
    FormInput,
    Grid,
    Icon,
    List,
    Modal,
    Segment,
    TransitionablePortal
} from 'semantic-ui-react'
import {useForm,Controller, FormProvider} from "react-hook-form";
import Axios from "../axiosConfig";
import {base64ToArrayBuffer} from "../CreateForms/utils";
import {ListPageForm} from "../CreateForms/protobuf/Fields_pb";
import {RenderProto} from "../CreateForms/Fields/RenderFields";
import {useDispatch, useSelector} from "react-redux";
import {SetFormAccessId} from "../Redux/RespondToForm/actions";
import {modalReducer} from "../ModalReducer/ModalReducer";


const RespondToForm = () => {
    const [PageForm,setPageForm]=useState([])
    const {register,handleSubmit,errors,control}= useForm()
    const state=useSelector(state=>state.respondToForm)
    const dispatch=useDispatch()
    const[states,dispatches]=useReducer(modalReducer,{isOpen:false})
    const[msg,setmsg]=useState("")
    const Search=(e)=>{
        setPageForm([])
        dispatch(SetFormAccessId({access_id:e.key}))
        Axios().get("dynamicforms/AccessForm", {
            params: {
                access_id: e.key,
            }
        }).then(e=>{
            if(e.data["success"]){
              const data= base64ToArrayBuffer(e.data.data)
             setPageForm(ListPageForm.deserializeBinary(data).getPageList())}
            else{
              dispatches({type:"OPEN"})
                setmsg("Form do not support any responses.Contact owner of the form \n")
            }
        }).catch(e=>{
            dispatches({type:"OPEN"})
            setmsg(e.response.data["non_field_errors"])

        })

    }


    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: "450px" }} >
                    <Container fluid textAlign={"center"} text>
                <Form  onSubmit={handleSubmit(Search)} >
                <Controller as={Form.Input} control={control}
                            ref={register({required:{value:true,message:"Please enter a valid id"}})}
                            name="key"
                            type="text" placeholder="enter the form access-id" />
                    {errors["key"] && errors["key"].message}
                <Form.Button  type={"submit"}  >Get</Form.Button>
                 </Form></Container>
                </Grid.Column>
            </Grid>
            <Grid textAlign="center" verticalAlign="middle" >
                <Grid.Column style={{ maxWidth: "900px" }} text>
                    {state.access_id!==null ? <FormDisplay  data={PageForm}/>:null}
                </Grid.Column>
            </Grid>
            <TransitionablePortal onClose={()=>dispatches({type:"CLOSE"})}  open={states.isOpen}>
                <Grid centered stackable textAlign="center" verticalAlign="middle" >

                <Segment  textAlign={"center"} stacked  style={{  zIndex: 1000,border:" 2px solid black",backgroundColor:"#55f3e01f" }}>
                    {msg}
                </Segment>


                </Grid>
            </TransitionablePortal>
        </div>
    );
};

export default RespondToForm;

const FormDisplay=({data})=>{
    const methods=useForm()
    const state=useSelector(state=>state.respondToForm)
    const[states,dispatches]=useReducer(modalReducer,{isOpen:false})
    const[msg,setMsg]=useState("")
    const submit=(data)=> {
        const _data = {"access_id": state.access_id, "Responses": data}

        const list = Object.keys(data).filter(e => e.toString().includes('file'))
        if (list.length !== 0) {
            const formdata = new FormData();

            list.forEach(e => {
                formdata.append(e.toString(), data[e][0])
            })
            formdata.append("access_id", state.access_id)

            Axios().post("dynamicforms/saveFile", formdata, {
                    'Content-Type': 'multipart/form-data',
                }
            ).then(e => {
                    const data = e.data["filepath"]
                    list.forEach(d => {
                        _data.Responses[d] = data[d]
                    })

                    Axios().post("dynamicforms/SubmitResponse", _data).then(e => {
                        setMsg("submitted successFully")
                        dispatches({type: "OPEN"})
                        methods.reset()
                    }).catch(e => {
                        setMsg(e.response.data['non_field_errors'])
                        dispatches({type: "OPEN"})
                    })
                }
            ).catch(e => {

                    setMsg(e.response.data['non_field_errors'])
                    dispatches({type: "OPEN"})
                }
            )


        }
        else {
            Axios().post("dynamicforms/SubmitResponse",_data).then(e=>{
                setMsg("submitted successFully")
                dispatches({type:"OPEN"})

            }).catch(e=>{
                setMsg(e.response.data['non_field_errors'])
                dispatches({type:"OPEN"})
            })
        }
        methods.reset()
    }
    return(
        <FormProvider {...methods} >
                    <Form  unstackable onSubmit={methods.handleSubmit(submit)} width={"equal"}>
                        {data.map((e,i)=>(
                            <FromFrame  data={e.getFieldsList()}/>
                        ))}
                        {data.length>0 ? <Form.Button content="submit" primary  />:null}
                    </Form>
            <ErrorModal isOpen={states.isOpen} msg={msg} dispatches={dispatches} />
        </FormProvider>
    )
}

const FromFrame=({data,})=>{
    return(
        <Segment>
        <List>
                {data.map((e,i)=>(
                    <RenderEachItem item={e} key={i}/>
                ))}
        </List>
        </Segment>
    )
}

const RenderEachItem=({item})=>{
    const nRenderProto = new RenderProto();
    const field = nRenderProto[String(item.getRenderFunc())](item);
    return(
        <List.Item as={Container}  textAlign="left">
            {field}
            <Divider/>
        </List.Item>

    )
}

const ErrorModal=memo(({isOpen,msg,dispatches})=>{
    return(
        <Modal size={"tiny"}   closeIcon  open={isOpen} onClose={()=>{dispatches({type:"CLOSE"})}}>
            <Modal.Content >
                {msg}
            </Modal.Content>
            <Modal.Actions >
                <Button positive onClick={() => dispatches({ type: 'CLOSE' })}>
                    ok
                </Button>
            </Modal.Actions>
        </Modal>

    )
})

