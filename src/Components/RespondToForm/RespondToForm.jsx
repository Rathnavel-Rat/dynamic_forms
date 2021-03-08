import React from 'react';
import {  Grid } from 'semantic-ui-react'
const RespondToForm = () => {
    return (
      <Grid>
        <Grid.Row>
            <Grid.Column>
                <input type="text" name="id"/>
                <input type="submit"/>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    );
};

export default RespondToForm;
