import React from 'react';
import {Button} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {ListFields,ListPageForm} from './protobuf/Fields_pb'
import {uuidv4} from "./utils";
import {AddFormPage} from "../Redux/DnDItems/action";
const Pager = () => {
    const dispatch=useDispatch()
    const DnD=useSelector(state=>state.dnd)
    const createNewPage=()=>{
        const nListFields=new ListFields()
        const id=uuidv4().toString();
        nListFields.setFormid(id)
        nListFields.setFieldsList([])
        const data={
            id:id,
            page:nListFields
        }
        dispatch(AddFormPage(data))
    }
    return (
        <div>
         <Button icon="add" onClick={()=>createNewPage()}  circular content="Add New Page"/>
        </div>
    );
};

export default Pager;
