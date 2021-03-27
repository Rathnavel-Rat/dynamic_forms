import React, {useEffect} from 'react';
import {Table,Header,Rating} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {ResetFormResponses} from "../Redux/GetFormReponses/actions";

const ViewFormResponses = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        return ()=>{
            dispatch(ResetFormResponses())
        }
    },[])
     const state= useSelector(state=>state.getFromResponses)
    return (
        <div>
            <h1>{state.name}</h1>

            {state.list!==null&&state.list.length!==0 ? <TableView data={state.list}/>:null}
        </div>
    );
};

export default ViewFormResponses;

const TableView=({data})=>{
       const array=[]
     console.log("ss",data)
    for (const p in data[0])
            if( data[0].hasOwnProperty(p) && p!=="Responses" )
                array.push(p)

    for(const p in data[0].Responses)
        if(data[0].Responses.hasOwnProperty(p))
            array.push(p)

    return(
        <Table stackable  sorted={true}>
            <Table.Header>
                <Table.Row>

                    {array.map((e,i)=>(
                        <Table.HeaderCell  key={i}>{e}</Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>

            <Table.Body>

                    {data.map((e,i)=>{

                        return(
                        <Table.Row>
                            <Table.Cell>{e.MailName}</Table.Cell>
                            {Object.values(e.Responses).map((e,i)=>(
                                <Table.Cell>{e.toString()}</Table.Cell>
                            ))}
                        </Table.Row>

                        )})}
                </Table.Body>
        </Table>
    )
}