import React from 'react'
import { DragDropContext} from 'react-beautiful-dnd'
import { useSelector,useDispatch } from 'react-redux'
import {  Grid, Segment, } from 'semantic-ui-react'
import ItemDrops from './ItemDrops'
import Toolbox from './Toolbox'
import {SetDragItem} from '../Redux/DnDItems/action'
import { items as Tools } from './ListInput'
import { GetAction } from './actions'

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const atPosition = (ExistingList, destinationIndex,Newdata) => {
    const destClone = Array.from(ExistingList);
    destClone.splice(destinationIndex, 0,Newdata);
    return destClone;
}


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
        if(source.droppableId!==destination.droppableId){
            if(draggableId==="inputemail")
                {
                    data = actions[String(Tools.find(e=>e.id===draggableId).action)](true);
                }
            else
                {
                    data = actions[String(Tools.find(e => e.id === draggableId).action)]();
                }
               
              const list=atPosition(DnD.fields,destination.index,data)
              dispatch(SetDragItem(list))
                    
        }
        if(source.droppableId===destination.droppableId){
           const reordered= reorder(DnD.fields,source.index,destination.index)
           dispatch(SetDragItem(reordered))
        }
       
        
    }
    return (
        <div>
            <DragDropContext onDragEnd={dragEndCall} >
            <Grid celled stackable doubling >
                <Grid.Row  stretched columns={2}> 
                    
                <Grid.Column  computer={3} >
                     {/*  toolbox*/ }
                    <Toolbox/>
                 </Grid.Column > 
            
                 <Grid.Column  computer={8} >     
                     {/* WA*/ }              
                    
                    <ItemDrops  />
                </Grid.Column>
            
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home


