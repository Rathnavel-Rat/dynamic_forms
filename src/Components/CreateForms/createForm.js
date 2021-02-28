import React,{memo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CreatedFormAPICall} from "../Redux/CreatedForm/actions";
import {List, Card, Image, Container, Icon} from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
const CreateForm = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.createdForm)
    useEffect(()=>{
         dispatch(CreatedFormAPICall())
    },[])
    return (
        <Segment verticalAlign="top"   fluid text  textAlign="center" >
            <List animated  >
            {data.data.map(e=>(
                <List.Item as={Card} >
                <List.Content floated="right" >
                    <Icon name="edit" color="blue" />
                    <Icon name="delete"/>
                </List.Content>
                <ListsForms item={e}/>

            </List.Item>))}

            </List>
        </Segment>
    );
};
const ListsForms=memo(({item})=>{
    const [isIconEdit,setisIconEdit]=useState(false)
    return(
        <List.Content  floated="left"><Icon color="blue" name="dot circle"/>
        {!isIconEdit? item.name:
            <div>
                <input style={{width:"100px",height:"q20px"}} type="text" value={item.name} placeholder={item.name} defaultValue={item.name}/>
                 <Icon color={"green"} name="save"/></div>}<Icon onClick={()=>{setisIconEdit(!isIconEdit)}} name="edit"/>
        </List.Content>
    )
})
export default CreateForm;

