import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {  Grid, Segment } from 'semantic-ui-react'
import ItemDrops from './ItemDrops'
import Toolbox from './Toolbox'

function Home() {
    const dragEndCall=(e)=>{
        console.log(e)
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
               <Grid.Column widescreen>                   
                    <ItemDrops/>
                </Grid.Column>
            
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home
