import React,{memo,useReducer,useEffect} from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import {Modal, Segment, Icon, Label, Form, Header, Container,} from 'semantic-ui-react'
import {
    DeleteAllElementsInAPage,
    DeleteAnDrags,
    DeleteAPage,
    LoadPage,
    RemoveAllDrags,
    SetDragItem
} from '../Redux/DnDItems/action'
import {ListFields,ListPageForm} from './protobuf/Fields_pb'
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
     const currentForm=useSelector(state=>state.currentForm)
     const[state,dispatches]=useReducer(modalReducer,{isOpen:false})

     useEffect(()=>{
        const a= base64ToArrayBuffer(currentForm.bindata)
         const data = {};
         ListPageForm.deserializeBinary(a).getPageList().forEach(e=>(
             data[e.getFormid().toString()]={id:e.getFormid(),page:e}
         ))
        dispatch(LoadPage(data))
     },[])

  const onSave=()=>{
       const nPageListForm = new  ListPageForm()
       const  array=[]
       Object.entries(DnD.formPage).map(e=>(
           array.push(e[1].page)
       ))
       nPageListForm.setPageList(array)
       const serialized=nPageListForm.serializeBinary()
       const data={"data":bufferToBase64(serialized),"form_id":currentForm.id}
       Axios().post("dynamicforms/saveform",data).then(e=>{dispatches({type:"OPEN"});}).catch(er=>{console.log(er)})
  }

    return (
        <Segment secondary  stacked>
          <Segment>
          <Label size={50} onClick={()=>dispatch(RemoveAllDrags())} color="red" attached="top right" style={{paddingRight:"18px",height:"10Ppx"}} icon="remove"   removeIcon />
          <Header> Drag Items from toolbar and place it below  </Header>
          <Label size={50} onClick={()=>onSave()} color="green" attached="top left" style={{paddingRight:"18px",height:"10Ppx"}} icon="save"   />
          </Segment>
            {
              Object.entries(DnD.formPage).map(e=>(

                 <Segment >
                     {console.log(DnD.formPage,"kkk0")}
                  <EachPage item={e[1].page} dispatch={dispatch}/>

                 </Segment>)
              )
            }
            <SavedModal open={state.isOpen} dis={dispatches}/>
      </Segment>
       
    )
}


export default ItemDrops


const EachPage=({item,dispatch})=>{
  console.log(item,"kkk")
    return(
        <Droppable  isCombineEnabled={true}  style={{height:"500px"}} droppableId={item.getFormid()} >

            {(provided,snapshot )=>(

                <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                    <Segment  widths="equal"  style={{height:"max-content",minHeight:"450px", backgroundColor:"#fff"}}>
                        <Label size={50} onClick={()=>{dispatch(DeleteAllElementsInAPage({id:item.getFormid()}))}} color="red" attached="top right" style={{paddingRight:"18px",height:"10Ppx"}} icon="remove"   removeIcon />


                        <DropList snapshot={snapshot} formId={item.getFormid()} items={item.getFieldsList()}/>
                        <Label size={50} onClick={()=>{dispatch(DeleteAPage({id:item.getFormid()}))}} color="red" attached="bottom right" style={{paddingRight:"18px",height:"10Ppx"}} icon="trash"   removeIcon />
                    </Segment>

                    {provided.placeholder}
                </div>


            )}

        </Droppable>
    )
}

function  DropList({snapshot,items,formId}) {
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
                              
                                 <EachItem formId={formId} item={item} provided={provided}/>
                             
                         </div>
                      
        )}  
       
      </Draggable>
   
      )})}
                  
    </Form>
      </FormProvider>
          )}


const  EachItem=({item,provided,formId}) =>{

    const nRenderProto = new RenderProto();
    const field = nRenderProto[String(item.getRenderFunc())](item);

    const dispatch = useDispatch();

  return (
                               <Segment textAlign="left"  secondary  >
                            
                                 <Label color="orange" attached="top left" ribbon style={{width:"min-content"}} icon="align justify" {...provided.dragHandleProps} />
                                
                                 <Label  attached="bottom right" onClick={()=>{dispatch(DeleteAnDrags({formId:formId,elementId:item.getUid()}))}} color="red" style={{width:"min-content"}} icon="trash alternate"  />  <br></br>
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

const SavedModal=memo(({open,dis})=>{
    return (
        <Modal
            basic
            size={"mini"}
            closeIcon
            open={ open}
            onClose={() => dis({type:"CLOSE"})}>
            <Modal.Header><Icon  color="green" name="save "/>Saved Successfully</Modal.Header>
            <Modal.Content >
                <Container textAlign={"center"}>
                 <Icon name={"check circle"} size={"huge"} color="green"/>
             </Container>
            </Modal.Content>
        </Modal>
    )


} )
