import React from 'react'
import { Radio } from 'semantic-ui-react';
import {createUUID} from '../protobuf/DummyData'


export const ProtoRadiobutton=({Map})=>{
    const arr=[]
    Map.forEach(function(v, k) {
      arr.push(v)
  });

  return(
      <div>
        <input type="text" name="11" placeholder="enter the question" style={{backgroundColor:"transparent",border:"none"}}  />
         { arr.map((item,i)=>(<Radio name={id}  label={item}/>))
         }
      </div>
    
  )
}