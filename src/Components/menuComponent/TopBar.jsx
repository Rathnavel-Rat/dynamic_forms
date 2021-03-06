import React from 'react'
import MobileMenu from './Mobilemenu'

import {Media,MediaContextProvider,mediaStyles } from '../../gloabalsMediaProvider'
import MenuComponent from './Menu'
import {  Switch, Route,BrowserRouter as Router,Redirect} from 'react-router-dom';
import Register from '../RegComponent/Register'
import Login from '../Logincomponent/Login';
import Password from '../Forgetpassword/Password';
import Passwordreset from '../Forgetpassword/PasswordReset/Passwordreset';
import Home from '../CreateForms/Home';
import { useSelector } from 'react-redux';

import CreatedForm from "../CreateForms/createdForm";
import RespondToForm from "../RespondToForm/RespondToForm";
import ViewFormResponses from "../FromResponses/FormResponses";
import CreativeFormHome from "../Home/Home";



 function TopBar() {
    
    

    return (
        <div> 
          <style>{mediaStyles}</style>
          <MediaContextProvider>
                <Router>
                   <Media   greaterThan="mobile">
                      <MenuComponent/>
                  </Media>
                     
                  <Media  at="mobile"  >
                      <MobileMenu/>
                  </Media>
                  <Switch>
                       <PrivateRoute  component={Home} path="/createForm"/>
                       <PrivateRoute component={RespondToForm} path='/RespondToForm'/>
                       <PrivateRoute component={CreatedForm} path="/createdForms"/>
                       <PrivateRoute component={ViewFormResponses} path="/ViewFormResponses"/>
                       <Route  path="/RespondedForm"/>
                       <Route path="/userSettings"/>
                       <PublicRoute restricted={false} path="/Home" component={CreativeFormHome} />
                       <PublicRoute restricted={false} path="/ForgotPassword" component={Password}/>
                       <PublicRoute restricted={true} path="/login" component={Login} exact/>
                       <PublicRoute restricted={true} path="/Register" component={Register} exact/> 
                       <PublicRoute restricted={false} path="/passwordReset:token_valid?/:message?/:uid64?/:token?" component={Passwordreset}/>
                       <Route path="/Logout"/>
                       
                  </Switch>
                  </Router>
 
         </MediaContextProvider>
        </div>
    )
}


export default TopBar;




const PrivateRoute = ({component: Component, ...rest}) => {
    const login=useSelector(state=>state.userdetails)
    return (
        <Route {...rest} render={props => (login.islogin ? <Component {...props} /> : <Redirect to="/Login" />
        )} />
    );
};

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const login=useSelector(state=>state.userdetails)
    return (
        <Route {...rest} render={props => ((login.islogin && restricted) ?  <Redirect to="/CreateForm" /> : <Component {...props} />
        )} />
    );
};