import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Container, Form, Segment } from 'semantic-ui-react'

function ItemDrops() {
    return (
        <Segment>
        
        <Droppable   style={{height:"500px"}} droppableId="workingArea" >
        {(provided,snapshot )=>(
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                 <Container style={{height:"500px",backgroundColor:"#333"}}>

                 </Container>

                {provided.placeholder}
               </div>
                    
  
           )}

         </Droppable>
     
            

      </Segment>
       
    )
}

export default ItemDrops
