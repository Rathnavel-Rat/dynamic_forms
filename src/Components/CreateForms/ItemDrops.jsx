import React,{useState} from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container,Button, Modal, List, Segment,Image, Label, } from 'semantic-ui-react'
import { DragEdit, RemoveAllDrags } from '../Redux/DnDItems/action'
import { DRAG_EDITS } from '../Redux/DnDItems/type'


function ItemDrops() {
  const  DnD= useSelector(state => state.dnd)
  const dispatch = useDispatch()
  //dispatch(RemoveAllDrags())

    return (
        <Segment >
          <Label size={50} onClick={()=>dispatch(RemoveAllDrags())} color="red" attached="top right" style={{paddingRight:"18px",height:"10Ppx"}} icon="remove"  corner="right" removeIcon />
          
        <Droppable isCombineEnabled={true}  style={{height:"500px"}} droppableId="workingArea" >
      
        {(provided,snapshot )=>(
      
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                 <Container style={{height:"500px",backgroundColor:"#fff"}}>
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
    <List  divided={snapshot.isDragging} verticalAlign='middle'>

        {items.map((item,i)=>{
              
            return (
             
             <Draggable key={item.uid} draggableId={item.uid} index={i}>
            {(provided, snapshot) => (
                      <List.Item key={item.uid}>
                          <div ref={provided.innerRef} 
                            {...provided.draggableProps} isDragging={snapshot.isDraggingOver}
                            isDragging={snapshot.isDraggingOver}   style={provided.draggableProps.style}  >
                              <List.Content>
                                 <EachItem item={item} provided={provided}/>
                              </List.Content>
                         </div>
                      </List.Item>
        )}  
       
      </Draggable>
   
      )})}
                  
    </List>)}


function EachItem({item,provided}) {
 
  return (
                               <Card textAlign="left"  >
                                 <Card.Header content={item.id}></Card.Header>
                                 <Label color="orange" ribbon style={{width:"min-content"}} icon="align justify" {...provided.dragHandleProps} />
        
                                 <Label attached="bottom right"   color="red" style={{width:"min-content"}} icon="trash alternate"  />  <br></br>   
                                  <Modal 
                                      content={Edits(item={item})}
                                      trigger={<Label  attached="top right"   color="green" style={{width:"min-content"}} icon="edit"/> }
                                      actions={CustomModalActions(item=item)}
                                     />
                                 
                                </Card>
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
   const dispatch = useDispatch()


  return(
  <Modal.Actions>
  <Button color='green' 
        labelPosition='right'
        icon='checkmark' >
          Done
  </Button>
  
</Modal.Actions>)
}


/*function ChangeIntoType({item}) {
   console.log(item)
  switch(item){
    case "inputradio":
      return(
      // <ProtoRadiobutton  Map={radio.getValuesMap()} />
      )
    default:
      return item;
  }
  return (
    <div>

    </div>
  )
}*/


