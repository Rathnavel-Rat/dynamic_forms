import React from 'react'
import { Form, Radio } from 'semantic-ui-react';


export class RenderProto{
  constructor(){
    this.RenderRadio= function(item){
      console.log("poos",)
      const arr=[]
      item.getRadio().getValuesMap().forEach(function(v, k) {
        arr.push(v)
    });
  
    return(
        <Form.Field>
          <Form.Input type="text" name="11" placeholder={item.getRadio().getLabel()} style={{backgroundColor:"transparent",border:"none"}}  />
           { arr.map((e,i)=>(<Form.Radio name={item.getUid()}  label={e}/>))
           }
        </Form.Field>
      
    )
    }

  }
}