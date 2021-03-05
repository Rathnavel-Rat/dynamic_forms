import React,{memo,useReducer} from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Segment,Image, Label, Form, Header, } from 'semantic-ui-react'
import {DeleteAnDrags, RemoveAllDrags, SetDragItem} from '../Redux/DnDItems/action'
import {ListFields} from './protobuf/Fields_pb'
import { RenderProto } from './Fields/RenderFields'
import {EditRenderField} from "./Fields/EditsFields";
import { useForm, useFormContext, FormProvider, Controller } from "react-hook-form";
import Axios from "../axiosConfig";
import {ExceptionList} from "./Fields/ExceptionList";
import {modalReducer} from "../ModalReducer/ModalReducer";
import {base64ToArrayBuffer,bufferToBase64} from "./utils";


function ItemDrops() {
  const  DnD= useSelector(state => state.dnd)
  const dispatch = useDispatch()
  const onSave=()=>{
   const nlistFields=new ListFields()
   nlistFields.setFieldsList(DnD.fields)
   const serialized=nlistFields.serializeBinary()//save in Database
      const data={"data":bufferToBase64(serialized)}
     Axios().post("dynamicforms/saveform",data,).then(e=>{

   }).catch(er=>{console.log(er)})
  }

    return (
        <Segment secondary  stacked>
          <Segment>
          <Label size={50} onClick={()=>dispatch(RemoveAllDrags())} color="red" attached="top right" style={{paddingRight:"18px",height:"10Ppx"}} icon="remove"   removeIcon />
          <Header> Drag Items from toolbar and place here </Header>
          <Label size={50} onClick={()=>onSave()} color="green" attached="top left" style={{paddingRight:"18px",height:"10Ppx"}} icon="save"   />
          </Segment>
          
        <Droppable  isCombineEnabled={true}  style={{height:"500px"}} droppableId="workingArea" >
      
        {(provided,snapshot )=>(
      
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                 <Segment  widths="equal"  style={{height:"max-content",minHeight:"450px", backgroundColor:"#fff"}}>
                   
                    <DropList snapshot={snapshot} items={DnD.fields}/>
                 </Segment>

                {provided.placeholder}
               </div>
                    
              
           )}
       
         </Droppable>
      </Segment>
       
    )
}

export default ItemDrops


 function  DropList({snapshot,items}) {
     const methods = useForm();
  return(
      <FormProvider {...methods} >
    <Form divided={snapshot.isDragging} verticalAlign='middle'>

        {items.map((item,i)=>{
              
            return (
             
             <Draggable key={item.getUid()} draggableId={item.getUid()} index={i}>
            {(provided, snapshot) => (
                          <div ref={provided.innerRef} key={item.getUid()} 
                            {...provided.draggableProps} isDragging={snapshot.isDraggingOver}
                            isDragging={snapshot.isDraggingOver}   style={provided.draggableProps.style}  >
                              
                                 <EachItem item={item} provided={provided}/>
                             
                         </div>
                      
        )}  
       
      </Draggable>
   
      )})}
                  
    </Form>
      </FormProvider>
          )}


const  EachItem=({item,provided}) =>{

    const nRenderProto = new RenderProto();
    const field = nRenderProto[String(item.getRenderFunc())](item);

    const dispatch = useDispatch();

  return (
                               <Segment textAlign="left"  secondary  >
                            
                                 <Label color="orange" attached="top left" ribbon style={{width:"min-content"}} icon="align justify" {...provided.dragHandleProps} />
                                
                                 <Label  attached="bottom right" onClick={()=>{dispatch(DeleteAnDrags(item.getUid()))}} color="red" style={{width:"min-content"}} icon="trash alternate"  />  <br></br>
                                   <CustomModal item={item}/>
                                   {field}
                                 
                                </Segment >
  )
}



const CustomModal=memo(({item})=>{

    const[state,dispatches]=useReducer(modalReducer,{isOpen:false,item:item})
    const nEditRenderField=new EditRenderField()
    let render=null;
    if (!ExceptionList.includes(String(item.getRenderFunc())) )
        render= nEditRenderField[String(item.getRenderFunc())](item)

    return (
        <Modal
            closeIcon
            open={state.isOpen}
            onClose={() => dispatches({type:"CLOSE"})}
            trigger={render!==null?<Label onClick={()=>dispatches({type:"OPEN"})} attached="top right"  color="yellow" style={{width:"min-content"}} icon="edit"  />:null}>
            <Modal.Header>Make Your Changes</Modal.Header>
            <Modal.Content>
                {render}
            </Modal.Content>
        </Modal>
    )

})

