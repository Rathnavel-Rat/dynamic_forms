import React,{useState} from 'react';
import {Container, Divider, Form, Grid, List, Segment} from 'semantic-ui-react'
import {useForm,Controller, FormProvider} from "react-hook-form";
import Axios from "../axiosConfig";
import {base64ToArrayBuffer} from "../CreateForms/utils";
import {ListPageForm} from "../CreateForms/protobuf/Fields_pb";
import {RenderProto} from "../CreateForms/Fields/RenderFields";
import {useDispatch, useSelector} from "react-redux";
import {SetFormAccessId} from "../Redux/RespondToForm/actions";


const RespondToForm = () => {
    const [PageForm,setPageForm]=useState([])
    const {register,handleSubmit,errors,control}= useForm()
    const state=useSelector(state=>state.respondToForm)
    const dispatch=useDispatch()
    const Search=(e)=>{
        dispatch(SetFormAccessId({access_id:e.key}))
        Axios().get("dynamicforms/AccessForm", {
            params: {
                access_id: e.key,
            }
        }).then(e=>{
            const data= base64ToArrayBuffer(e.data.data)
            setPageForm(ListPageForm.deserializeBinary(data).getPageList())
        }).catch(e=>{

        })
    }


    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: "450px" }} >
                    <Container fluid textAlign={"center"} text>
                <Form  onSubmit={handleSubmit(Search)}>
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
        </div>
    );
};

export default RespondToForm;

const FormDisplay=({data,key})=>{
    const methods=useForm()
    const state=useSelector(state=>state.respondToForm)
    const submit=(data)=>{
        const _data={"access_id":state.access_id,"Responses":data}
        console.log(_data,"kkk")
        Axios().post("dynamicforms/SubmitResponse",_data).then(e=>{
            console.log(e)
        }).catch(e=>{
            console.log(e)
        })
    }
    return(

        <FormProvider {...methods} >
                    <Form onSubmit={methods.handleSubmit(submit)} width={"equal"}>
                        {data.map((e,i)=>(
                            <FromFrame  data={e.getFieldsList()}/>
                        ))}
                        <Form.Button content="submit" primary  />
                    </Form>
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