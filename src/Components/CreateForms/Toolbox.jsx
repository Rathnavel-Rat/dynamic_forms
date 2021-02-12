import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import {   List, Search, Segment } from 'semantic-ui-react'
import { items } from './ListInput'
const styledDrag=(isDragging,prestyle)=>({
    display: "flex",
    userSelect: "none",
    padding: "0.5rem",
    margin: "0 0 0.5rem 0",
    alignItems: "flex-start",
    alignContent: "flex-start",
    lineHeight: "1.5",
    borderRadius: "3px",
    background: `#fff`,
    border: `1px ${(isDragging ? 'dashed #333' : 'solid #ed58e8')}`,
    ...prestyle,
});

const getRenderItem = (items) => (provided, snapshot, rubric) => {
    const item = items[rubric.source.index];
    return (
      <React.Fragment>
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={styledDrag(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
         <List.Content>
            <List.Icon name={item.icon}/> <List.Header>{item.name}</List.Header>
              </List.Content>
        </div>
      </React.Fragment>
    );
  };


function Toolbox() {
   

    return (
        <div>
                <Segment attached textAlign="left">
                
    
                <Search style={{width:"20px"}}></Search>
                <Droppable  renderClone={getRenderItem(items)} droppableId="toolbox"  isDropDisabled={true} >
                {(provided,snapshot )=>(
                       
                    
                       <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}  >
                        <Toolboxlist items={items} snapshot={snapshot}/>
                        
                        {provided.placeholder}
                       </div>
                            

                   )}

                 </Droppable>
                 </Segment>
                    
        
        </div>
    )
}

export default Toolbox



function Toolboxlist({items,snapshot}) {
    return(
    <List divided={snapshot.isDragging} selection verticalAlign='middle'>
        
        {items.map((item,i)=>{
            const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
            return (
            <React.Fragment key={item.id}>
                {shouldRenderClone ?(
                         <List.Item>
                                <List.Content>
                                  <List.Icon name={item.icon}/> <List.Header>{item.name}</List.Header>
                                 </List.Content>
                          </List.Item>
                                ):(
           <Draggable key={item.id} draggableId={item.id} index={i}    >
            {(provided, snapshot) => (
                            <List.Item key={item.id} >
                              <div ref={provided.innerRef} 
                                       {...provided.draggableProps} 
                                       {...provided.dragHandleProps} 
                                       isDragging={snapshot.isDraggingOver}
                                       style={styledDrag( snapshot.isDragging,provided.draggableProps.style)}
                                       >
           
                                  <List.Content>
                                      <List.Icon name={item.icon}/> <List.Header>{item.name}</List.Header>
                                   </List.Content>
                              </div>
                           </List.Item>
        )}
       
      </Draggable>)}
      </React.Fragment>
      )})}
                  
    </List>)}

              
                  
       
