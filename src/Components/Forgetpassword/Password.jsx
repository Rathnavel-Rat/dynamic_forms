import React,{useEffect} from 'react'
import { Button,Form, Grid, Header, Label, Message, Segment } from 'semantic-ui-react'
import { useForm,Controller } from "react-hook-form";
import { useSelector,useDispatch} from 'react-redux';
import {   useHistory } from 'react-router-dom';
import { PasswordRequestAPI } from '../Redux/passwordChange/actions';

function Password() {
  //form
  const {register,errors,handleSubmit,trigger,setValue,control}=useForm();

  useEffect(() => {
    
      register({name:"email"},{required:{value:true,message:"PleaseFill"},pattern:  {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid E-mail Id"}})
  }, );
 
  const valid=async (e, { name, value }) => {
    setValue(name, value);
    await trigger({ name });
  }
  const submitTo=(data)=>{
    dispatch(PasswordRequestAPI(data))
  }

  //redux
  const sdata=useSelector(state=>state.changepassword)
  const dispatch = useDispatch()
 //redirect
  var history=useHistory();
  const onClickSignUp=()=>{
    history.push("/Register")
  }  
  const onClickSignIn=()=>{
      history.push("/Login")
  }
  //style
  const TransStyle={
    border:"none",
    borderRadius: "5px",
    background: "rgba(255, 255, 255,0)",
    color:"teal",
    cursor: "pointer"
}
  
  
 

   
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }} >
        <Header as='h2' textAlign='center'>
          PASSWORD RESET EMAIL VERIFICATION
        </Header>
        <Form size='large' onSubmit={handleSubmit(submitTo)}>
        <Segment stacked>
        
          <Controller defaultValue="" control={control} as={Form.Input}  name="email" fluid icon='mail' iconPosition='left'  placeholder='email' onChange={valid} error={errors.email ? true :false}/>
          {errors.email && <Label pointing="above" color="red">{errors.email.message}</Label>}
          <Button color='blue' fluid size='large'>
            Submit
          </Button>
         
         <button  style={TransStyle} onClick={()=>onClickSignUp()}>Sign Up</button>
         <button  style={TransStyle} onClick={()=>onClickSignIn()}>Sign In</button>
        </Segment>
      </Form>
        <Message>
          {sdata.message}
        </Message>
      </Grid.Column>
    </Grid>
    )
}

export default Password
