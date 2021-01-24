import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {  Grid } from 'semantic-ui-react'
import Toolbox from './Toolbox'

function Home() {
    return (
        <div>
            <DragDropContext >
            <Grid>
                <Grid.Row  stretched columns={2}> 
            {/*  toolbox*/ }
        
                <Grid.Column  computer={3} >
                    
                    <Toolbox/>
                
                </Grid.Column > 
            
              {/* WA*/ }
               <Grid.Column >
               
             </Grid.Column>
            
             </Grid.Row>
          </Grid>
          </DragDropContext>
        </div>
    )
}

export default Home
