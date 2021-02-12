import React,{useState} from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container,Button, Modal, List, Segment,Image, Label, Form, Grid, } from 'semantic-ui-react'
import { DragEdit, RemoveAllDrags } from '../Redux/DnDItems/action'
import { DRAG_EDITS } from '../Redux/DnDItems/type'
import { RenderProto } from './Fields/RenderFields'


function ItemDrops() {
  const  DnD= useSelector(state => state.dnd)
  const dispatch = useDispatch()

    return (
        <Segment >
          <Label size={50} onClick={()=>dispatch(RemoveAllDrags())} color="red" attached="top right" style={{paddingRight:"18px",height:"10Ppx"}} icon="remove"   removeIcon />
          
        <Droppable  isCombineEnabled={true}  style={{height:"500px"}} droppableId="workingArea" >
      
        {(provided,snapshot )=>(
      
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                 <Container widths="equal" style={{height:"500px",backgroundColor:"#fff"}}>
                    <DropList snapshot={snapshot} items={DnD.fields}></DropList>
                 </Container>

                {provided.placeholder}
               </div>
                    
              
           )}
       
         </Droppable>
      </Segment>
       
    )
}

export default ItemDrops


 function  DropList({snapshot,items}) {
  return(
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
                  
    </Form>)}


function EachItem({item,provided}) {

  var nRenderProto=new RenderProto()
  var g=nRenderProto[String(item.getRenderFunc())](item)

  return (
                               <Segment textAlign="left"  secondary  >
                            
                                 <Label color="orange" attached="top left" ribbon style={{width:"min-content"}} icon="align justify" {...provided.dragHandleProps} />
                                
                                 <Label attached="bottom right"   color="red" style={{width:"min-content"}} icon="trash alternate"  />  <br></br>   
                                  <Modal 
                                      content={Edits(item={item})}
                                      trigger={<Label  attached="top right"   color="green" style={{width:"min-content"}} icon="edit"/> }
                                      actions={CustomModalActions(item=item)}
                                     />
                                   {g}
                                 
                                </Segment >
  )
}

const Edits=({item})=>{
   
  return(
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <p>
            {item.id}
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
  );
}

const CustomModalActions=({item})=>{
 


  return(
  <Modal.Actions>
  <Button color='green' 
        labelPosition='right'
        icon='checkmark' >
          Done
  </Button>
  
</Modal.Actions>)
}




