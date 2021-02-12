import React,{useState} from 'react'
import { DragDropContext} from 'react-beautiful-dnd'
import { useSelector,useDispatch } from 'react-redux'
import {  Grid, Segment } from 'semantic-ui-react'
import ItemDrops from './ItemDrops'
import { createUUID } from './protobuf/utils'
import Toolbox from './Toolbox'
import {DragItemAdd} from '../Redux/DnDItems/action'
import { items as Tools } from './ListInput'
import { GetAction } from './actions'


function Home() {

    const  DnD= useSelector(state => state.dnd)
    const dispatch = useDispatch()
    var actions=new GetAction()

    const dragEndCall=(result)=>{
        
        let data;
        const { source, destination,draggableId} = result;
        if (!destination) {
            return;
        }
        console.log(result)
        if(source.droppableId!==destination.droppableId){
            if(draggableId==="inputemail")
                {
                    data = actions[String(Tools.find(e=>e.id===draggableId).action)](true);
                }
            else
                {
                    data = actions[String(Tools.find(e => e.id === draggableId).action)]();
                }
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
               <Grid.Column computer={8} floated>                   
                    <ItemDrops  />
                </Grid.Column>
            
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home


