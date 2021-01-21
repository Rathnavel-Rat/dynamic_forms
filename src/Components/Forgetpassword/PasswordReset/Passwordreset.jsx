
import React,{useEffect, useState} from 'react'
import { Button,Form, Grid, Header, Label, Message, Segment,Loader } from 'semantic-ui-react'
import { useForm,Controller } from "react-hook-form";
import { useSelector,useDispatch} from 'react-redux';
import Axios from '../../axiosConfig';
import { PasswordResetAPI } from '../../Redux/passwordChange/actions';



function Passwordreset(props) {
    const {register,errors,handleSubmit,trigger,setValue,control}=useForm()
   
    
    const urlParams = new URLSearchParams(window.location.search);
    const valid_cred = urlParams.get('token_valid','');
    const message=urlParams.get('message',"")
    const uid64=urlParams.get("uidb64","")
    const token=urlParams.get("token","")
    //http://localhost:3000/passwordReset?token_valid=True&message=CredentialsValid&uidb64=NzhkZTg1YTQtMzBkYy00NTNiLTk4ZGItOGJmZmI5MzJhMTYz&token=agorxd-e8dad31e03a17dbdd0b82efa3f86bb2c


    useEffect(() => {
       
        register({name:"password"},{required:{value:true,message:"PleaseFill"},minLength:{value:6,message:"Must be 6 Character length"}})
        register({name:"confrimpassword"},{required:{value:true,message:"PleaseFill"},minLength:{value:6,message:"Must be 6 Character length"}})
    }, );
  
   
    const valid=async (e, { name, value }) => {
      setValue(name, value);
      await trigger({ name });
    }
   
     
      
  
    //redirect

    //redux
    const sdata=useSelector(state=>state.changepassword)
    const dispatch=useDispatch()

    const submitTo=(data)=>{
      data["token"]=token
      data["uid"]=uid64
      delete data['confrimpassword'];
      dispatch(PasswordResetAPI(data))
    }
    

  

    

  
     
      return (
        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }} >
          <Header as='h2' textAlign='center'>
           Password Reset
          </Header>
          <Form size='large' onSubmit={handleSubmit(submitTo)}>
          <Segment stacked>
            <Controller defaultValue="" control={control} as={Form.Input}  name="password" fluid icon='lock' iconPosition='left'    placeholder='Password' type='password' onChange={valid} error={errors.password ? true :false} />
            {errors.password && <Label pointing="above" color="red">{errors.password.message}</Label>}
            <Controller defaultValue="" control={control} as={Form.Input}  name="confrimpassword" fluid icon='lock' iconPosition='left'    placeholder='ConfrimPassword' type='password' onChange={valid} error={errors.password ? true :false} />
            {errors.confrimpassword && <Label pointing="above" color="red">{errors.confrimpassword.message}</Label>}
            <Button color='blue' fluid size='large'>
              set Password
            </Button>
            
          </Segment>
        </Form>
          <Message>
            {sdata.message}
          </Message>
        </Grid.Column>
      </Grid>
      )
      }

export default Passwordreset
