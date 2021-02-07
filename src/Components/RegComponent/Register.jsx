import React,{useEffect, useState} from 'react'
import { Button,Form, Grid, Header, Label, Message, Segment } from 'semantic-ui-react'
import { useForm,Controller } from "react-hook-form";
import { useSelector,useDispatch} from 'react-redux';
import { RegisterApiCall } from '../Redux/Register/action';
import {   useHistory } from 'react-router-dom';
function Register(props) {
  var history=useHistory();
  const success=useSelector(state=>state.register)

  const dispatch = useDispatch()
  const onclickSignIn=()=>{
    history.push("/Login")
  }  
  

  const {register,errors,handleSubmit,trigger,setValue,control}=useForm();
    const [validError, setvalidError] = useState(null)
    useEffect(() => {
      register({ name: "username" }, { required: {value:true,message:"UserName required"} });
      register({ name: "email" }, { required: {value:true,message:"email id required"}, pattern:  {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid E-mail Id"}});
      register({name:  "password"},{ required: {value:true,message:"password required"} });
      register({name:  "confrimpassword"},{ required: {value:true,message:"password reuired"} });
    
    }, );
    const valid=async (e, { name, value }) => {
      setValue(name, value);
      await trigger({ name });
    }

    const submitTo=(data)=>{
     
      if(data["password"]!==data["confrimpassword"])
      {
        setvalidError("password doesnot match")
      }
      else{
        delete data['confrimpassword'];
        console.log(data)
        dispatch(RegisterApiCall(data))
        setvalidError("")
      
      }     
    }
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }} >
        <Header as='h2' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleSubmit(submitTo)}>
        <Segment stacked>
          <Controller defaultValue="" control={control} as={Form.Input} name="username" fluid icon='user' iconPosition='left' placeholder='username' onChange={valid} error={errors.username ? true :false} />
          {errors.username && errors.username.message}
          <Controller defaultValue="" control={control} as={Form.Input}  name="email" fluid icon='mail' iconPosition='left'  placeholder='Email Id' onChange={valid} error={errors.email ? true :false}/>
          {errors.email && errors.email.message}
          <Controller defaultValue="" control={control} as={Form.Input}  name="password" fluid icon='lock' iconPosition='left'    placeholder='Password' type='password' onChange={valid} error={errors.password ? true :false} />
          {errors.password && errors.password.message}
          <Controller defaultValue="" control={control} as={Form.Input} name="confrimpassword" fluid icon='lock' iconPosition='left'    placeholder='confrim Password' type='password' onChange={valid} error={errors.confrimpassword ? true :false} />
          {errors.confrimpassword && errors.confrimpassword.message}
          <Button color='blue' fluid size='large'>
            Register
          </Button>
         {validError ? <Label>{validError}</Label> :""}
         Existing User<a href="!#" onClick={()=>onclickSignIn()}> Sign In</a>
        </Segment>
      </Form>
        <Message>
          {success.message}
        </Message>
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


export default  /*connect(mapStateToProps,mapDispatchToProps)*/Register;