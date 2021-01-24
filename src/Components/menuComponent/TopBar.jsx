import React from 'react'
import MobileMenu from './Mobilemenu'

import {Media,MediaContextProvider,mediaStyles } from '../../gloabalsMediaProvider'
import MenuComponent from './Menu'
import {  Switch, Route,BrowserRouter as Router} from 'react-router-dom';
import Register from '../RegComponent/Register'
import Login from '../Logincomponent/Login';
import Password from '../Forgetpassword/Password';
import Passwordreset from '../Forgetpassword/PasswordReset/Passwordreset';
import Home from '../CreateForms/Home';



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
                      <Route path="/createForm"><Home/></Route>
                       <Route path="/RespondedForm"></Route>
                       <Route path="/userSettings"></Route>
                       <Route path="/ForgotPassword"><Password/></Route>
                       <Route path="/Login"><Login/></Route>
                       <Route path="/Logout"></Route>
                       <Route path="/Register"><Register/></Route> 
                       <Route path="/passwordReset:token_valid?/:message?/:uid64?/:token?"><Passwordreset/></Route>
                       <Route path="/Logout"></Route>
                  </Switch>
                  </Router>
 
         </MediaContextProvider>
        </div>
    )
}


export default TopBar;




