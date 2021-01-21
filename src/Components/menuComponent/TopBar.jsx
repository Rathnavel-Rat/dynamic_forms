import React from 'react'
import MobileMenu from './Mobilemenu'

import {Media,MediaContextProvider,mediaStyles } from '../../gloabalsMediaProvider'
import MenuComponent from './Menu'
import { Redirect, Switch, Route,BrowserRouter as Router} from 'react-router-dom';
import Register from '../RegComponent/Register'
import Login from '../Logincomponent/Login';
import Password from '../Forgetpassword/Password';
import Passwordreset from '../Forgetpassword/PasswordReset/Passwordreset';



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
                      <Route path="/createdForm"></Route>
                       <Route path="/RespondedForm"></Route>
                       <Route path="/userSettings"></Route>
                       <Route path="/ForgotPassword"><Password/></Route>
                       <Route path="/Login"><Login/></Route>
                       <Route path="/Logout"></Route>
                       <Route path="/Register"><Register/></Route> 
                       <Route path="/passwordReset:token_valid?/:message?/:uid64?/:token?"><Passwordreset/></Route>
                       <Route path="/Logout"></Route>
                       
                      {/* http://localhost:3000/passwordReset/?token_valid=True&message=CredentialsValid&uidb64=OTMyMWM0NzQtYzljYS00NWRkLTg5NDktZDRhMjMyYzMyYTQ5&token=agn1y6-cbd8f11796120c3eddeb1b593bf5d08c*/}
                       

                      
                      
                  </Switch>
                  </Router>
 
         </MediaContextProvider>
        </div>
    )
}


export default TopBar;




