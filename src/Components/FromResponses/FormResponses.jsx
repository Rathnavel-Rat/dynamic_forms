import React, {memo, useEffect} from 'react';
import {Table, Popup, Container, Button} from "semantic-ui-react";
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
            {state.list!==null&&state.list.length!==0 ? <TableView tableName={state.name} binData={state.binaryData} data={state.list}/>:null}
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
const to_csv=(tableName,table)=>
    {
        let i, j;
        let csv = "";


        const table_headings = table.children[0].children[0].children;
        const table_body_rows = table.children[1].children;

        let heading;
        const headingsArray = [];
        for(i = 0; i < table_headings.length; i++) {
            heading = table_headings[i];
            headingsArray.push('"' + heading.innerHTML + '"');
        }

        csv += headingsArray.join(',') + "\n";

        let row;
        let columns;
        let column;
        let columnsArray;
        for(i = 0; i < table_body_rows.length; i++) {
            row = table_body_rows[i];
            columns = row.children;
            columnsArray = [];
            for(j = 0; j < columns.length; j++) {
                column = columns[j];
                columnsArray.push('"' + column.innerHTML + '"');
            }
            csv += columnsArray.join(',') + "\n";
        }

        download(tableName+".csv",csv);
    }
    function download(filename, text) {
        const pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }

    }

const TableView=memo(({tableName,data,binData})=>{

    const array=[]
    const labelIdData=getLabelForId(ListPageForm.deserializeBinary(binData))

    for (const p in data[0])
            if( data[0].hasOwnProperty(p) && p!=="Responses" )
                array.push(p)

    for(const p in data[0].Responses)
        if(data[0].Responses.hasOwnProperty(p))
            array.push(p)
    const TriggerDownload=()=>{
        to_csv(tableName,document.getElementById('table1'))
    }

    return(
        <div>
        <Table id={"table1"} stackable  sorted={true} celled striped selectable role="grid" aria-labelledby="header">
            <Table.Header>
                <Table.Row>
                    {array.map((e,i)=>
                        i!==0?
                        <Popup style={{cursor:"pointer"}} content={labelIdData[e]} trigger={ <Table.HeaderCell  key={i}>{labelIdData[e]}</Table.HeaderCell>} />:
                            <Popup style={{cursor:"pointer"}}  trigger={ <Table.HeaderCell  key={i}>Mail/username</Table.HeaderCell>} />

                    )}
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
            <Button onClick={()=>TriggerDownload()}>Download</Button>
        </div>
    )
})