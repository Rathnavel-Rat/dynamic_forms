import React from 'react'
import { DragDropContext} from 'react-beautiful-dnd'
import { useSelector,useDispatch } from 'react-redux'
import {  Grid, } from 'semantic-ui-react'
import ItemDrops, {Pages} from './ItemDrops'
import Toolbox from './Toolbox'
import {SetDragItem, Swap_Between_Page} from '../Redux/DnDItems/action'
import { items as Tools } from './ListInput'
import { GetAction } from './actions'
import Pager from "./Pager";


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

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result["source"] = sourceClone;
    result["destination"] =destClone;

    return result;
};



function Home() {

    const  DnD= useSelector(state => state.dnd)
    const dispatch = useDispatch()
    const actions = new GetAction();
    const selector=useSelector(state=>state.currentForm)


    const dragEndCall=(result)=>{
        let data;
        const { source, destination,draggableId} = result;
        if (!destination) {
            return;
        }

        if(source.droppableId!==destination.droppableId && source.droppableId==="toolbox"){
            if(draggableId==="inputemail")
                {
                    data = actions[String(Tools.find(e=>e.id===draggableId).action)](true);
                }
            else
                {
                    data = actions[String(Tools.find(e => e.id === draggableId).action)]();
                }
               const list=atPosition(DnD.formPage[destination.droppableId.toString()].page.getFieldsList(),destination.index,data)
            dispatch(SetDragItem({id:destination.droppableId,list:list}))

                    
        }
        else if(source.droppableId!==destination.droppableId){
           const result= move(DnD.formPage[source.droppableId.toString()].page.getFieldsList(),DnD.formPage[destination.droppableId.toString()].page.getFieldsList(),source,destination)
            dispatch(Swap_Between_Page({sourceid:source.droppableId,destinationid:destination.droppableId,source:result["source"],destination:result["destination"]}))
        }
        if(source.droppableId===destination.droppableId){
            const list=reorder(DnD.formPage[destination.droppableId.toString()].page.getFieldsList(),source.index,destination.index)
            dispatch(SetDragItem({id:destination.droppableId,list:list}))
        }
       
        
    }
    return (
        <div>
            <Grid.Row>
                <h1>{selector.name}</h1>
            </Grid.Row>
            <DragDropContext onDragEnd={dragEndCall} >
            <Grid celled stackable doubling >
                <Grid.Row  stretched columns={3}>
                    
                <Grid.Column  computer={3} >
                     {/*  toolbox*/ }
                    <Toolbox/>
                 </Grid.Column > 
            
                 <Grid.Column  computer={8} >     
                     {/* WA*/ }              
                    
                    <ItemDrops/>

                </Grid.Column>

                    <Grid.Column  computer={3} >

                       <Pager/>

                    </Grid.Column>
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home


