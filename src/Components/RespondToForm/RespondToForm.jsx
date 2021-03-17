import React,{useState} from 'react';
import {Button, Container,Form, Grid, GridColumn} from 'semantic-ui-react'
import {useForm, Control, Controller, FormProvider} from "react-hook-form";
import Axios from "../axiosConfig";
import {base64ToArrayBuffer} from "../CreateForms/utils";
import {ListFields} from "../CreateForms/protobuf/Fields_pb";
import {RenderProto} from "../CreateForms/Fields/RenderFields";


const RespondToForm = () => {
    const [FormElements,setFormElements]=useState([])
    const {register,handleSubmit,errors,control}= useForm()

    const Search=(e)=>{
        Axios().get("dynamicforms/AccessForm", {
            params: {
                access_id: e.key,
            }
        }).then(e=>{
            const data= base64ToArrayBuffer(e.data.data)
            setFormElements(ListFields.deserializeBinary(data).getFieldsList())
        }).catch(e=>{

        })
    }

    return (
        <div>
            <Grid >
            <Grid.Row columns={1}  textAlign={"center"} verticalAlign={"middle"}>
                <Grid.Column>
                    <Container textAlign={"center"}>
                <Form onSubmit={handleSubmit(Search)}>
                <Controller as={Form.Input} control={control}  width={5}  ref={register({required:{value:true,message:"Please enter a valid id"}})}   name="key" type="text" placeholder="enter the form access-id" />
                    {errors["key"] && errors["key"].message}
                <Form.Button  type={"submit"}  >Get</Form.Button>
                 </Form></Container>

                </Grid.Column>
            </Grid.Row>
            </Grid>

                <Grid celled stackable doubling >
                    <Grid.Row  stretched columns={2}>

                        <Grid.Column  computer={3} >

                        </Grid.Column >

                        <Grid.Column  computer={8} >
                            <FromFrame data={FormElements}/>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>

        </div>
    );
};

export default RespondToForm;
const FromFrame=({data})=>{
    const methods=useForm()

    const submit=(e)=>{
        console.log(e,"kkk")
    }
    return(
        <FormProvider {...methods} >
            <Form onSubmit={methods.handleSubmit(submit)} width={"equal"}>
                {data.map((e,i)=>(
                    <RenderEachItem item={e} key={i}/>
                ))}
                <Form.Button content="submit" primary  />
            </Form>
        </FormProvider>
    )
}

const RenderEachItem=({item})=>{
    const nRenderProto = new RenderProto();
    const field = nRenderProto[String(item.getRenderFunc())](item);
    return(
        <div>
            {field}
        </div>

    )
}