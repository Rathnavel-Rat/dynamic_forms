import React,{useEffect} from 'react'
import { Button,Form, Grid, Header, Label, Loader, Segment,Dimmer } from 'semantic-ui-react'
import { useForm,Controller } from "react-hook-form";
import { useSelector,useDispatch} from 'react-redux';
import {   useHistory } from 'react-router-dom';
import { LoginApiCall } from '../Redux/Login/action';


function Login(props) {
  //form
  const {register,errors,handleSubmit,trigger,setValue,control}=useForm();

  useEffect(() => {
     
      register({ name: "password" }, { required: {value:true,message:"Password required"}});
      register({name:"email"},{required:{value:true,message:"Email id required"},pattern:  {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid E-mail Id"}})
  }, );
 
  const valid=async (e, { name, value }) => {
    setValue(name, value);
    await trigger({ name });
  }
  const submitTo=(data)=>{
    dispatch(LoginApiCall(data))
  }

  //redirect
  var history=useHistory();
  const onClickSignIn=()=>{
    history.push("/Register")
  }  
  const onClickForgot=()=>{
    history.push("/ForgotPassword")
  }
  //redux
  const sdata=useSelector(state=>state.login)
  const dispatch = useDispatch()
  if(sdata.islogin===true){
    history.push("/Home")
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
          Sign-in
        </Header>
        <Form size='large' onSubmit={handleSubmit(submitTo)}>
        <Segment stacked>
        
          <Controller defaultValue="" control={control} as={Form.Input}  name="email" fluid icon='mail' iconPosition='left'  placeholder='email' onChange={valid} error={errors.email ? true :false}/>
          {errors.email && <Label pointing="above" color="red">{errors.email.message}</Label>}
          <Controller defaultValue="" control={control} as={Form.Input}  name="password" fluid icon='lock' iconPosition='left'    placeholder='Password' type='password' onChange={valid} error={errors.password ? true :false} />
          {errors.password && <Label pointing="above" color="red">{errors.password.message}</Label>}
          <Button color='blue' fluid size='large'>
            LogIn
          </Button>
          <button  style={TransStyle} color="white" onClick={()=>onClickForgot()}>ForgotPassword</button><br/>
         Not an User <button   style={TransStyle}  color="blue" onClick={()=>onClickSignIn()}>Sign Up</button>
        </Segment>
      </Form>
        
    <Segment>
      {console.log(sdata.laoding)}
        {sdata.laoding===true ?(<Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>):( sdata.message)}
    </Segment>
      </Grid.Column>
    </Grid>
    )
}
/*const mapStateToProps=state=>{
  return{
    laod:state.loading
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    disp:()=>dispatch(RegisterApiCall())
  }
}*/


export default  Login;