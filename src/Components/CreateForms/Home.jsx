import React,{useState} from 'react'
import { DragDropContext} from 'react-beautiful-dnd'
import { useSelector,useDispatch } from 'react-redux'
import {  Grid, Segment } from 'semantic-ui-react'
import ItemDrops from './ItemDrops'
import radio, { createUUID } from './protobuf/DummyData'
import Toolbox from './Toolbox'
import {DragItemAdd} from '../Redux/DnDItems/action'


function Home() {

    const  DnD= useSelector(state => state.dnd)
    const dispatch = useDispatch()

    const dragEndCall=(result)=>{
        
        const { source, destination,draggableId} = result;
        if (!destination) {
            return;
        }
        console.log(result)
        if(source.droppableId!=destination.droppableId){
            var data=MapperTags(draggableId)
            dispatch(DragItemAdd(data))
            
                        
        }
       
        
    }
    return (
        <div>
            <DragDropContext onDragEnd={dragEndCall} >
            <Grid celled stackable >
                <Grid.Row  stretched columns={2}> 
            {/*  toolbox*/ }
        
                <Grid.Column  computer={3} >
                    
                    <Toolbox/>
                
                </Grid.Column > 
            
              {/* WA*/ }
               <Grid.Column computer={12} floated>                   
                    <ItemDrops  />
                </Grid.Column>
            
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home


const MapperTags=(draggableId)=>{
    switch(draggableId){
        case "inputradio":
            return  {id:draggableId,uid:createUUID(),modalOpen:true,element:radio}
        default :
        return null;

    }

}