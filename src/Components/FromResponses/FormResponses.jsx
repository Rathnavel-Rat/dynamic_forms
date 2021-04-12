import React, {memo, useEffect} from 'react';
import {Table, Popup, Container} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {ResetFormResponses} from "../Redux/GetFormReponses/actions";
import {ListPageForm} from "../CreateForms/protobuf/Fields_pb";
import {LabelFromProto} from "./getLabebId";

const ViewFormResponses = () => {
    const dispatch=useDispatch()
    let state= useSelector(state=>state.getFromResponses)
    useEffect(()=>{
        return ()=>{
            dispatch(ResetFormResponses())
        }
    },[])




    return (
        <div>
            <Container>
                <h1>{state.name}</h1>
                {state.list!==null&&state.list.length!==0 ? <div>no of Responses:{state.list.length}</div>:<div>0<br/>Responses</div>}
            </Container>
            {state.list!==null&&state.list.length!==0 ? <TableView binData={state.binaryData} data={state.list}/>:null}
        </div>
    );
};

export default ViewFormResponses;

const getLabelForId=(data)=>{
    const a={}
    const getLabelId=new LabelFromProto()
    data.getPageList().forEach(e=>e.getFieldsList().forEach(i=>{
        if(String(i.getRenderFunc())!=="RenderLabel")
        a[i.getUid()]= getLabelId[String(i.getRenderFunc())](i)}
    ))
    return a;
}

const TableView=memo(({data,binData})=>{

    const array=[]
    const labelIdData=getLabelForId(ListPageForm.deserializeBinary(binData))

    for (const p in data[0])
            if( data[0].hasOwnProperty(p) && p!=="Responses" )
                array.push(p)

    for(const p in data[0].Responses)
        if(data[0].Responses.hasOwnProperty(p))
            array.push(p)

    return(
        <Table stackable  sorted={true} celled striped selectable role="grid" aria-labelledby="header">
            <Table.Header>
                <Table.Row>

                    {array.map((e,i)=>(

                        <Popup  content={labelIdData[e]} trigger={ <Table.HeaderCell style={{cursor:"pointer"}}  key={i}>{e}</Table.HeaderCell>} />
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
})