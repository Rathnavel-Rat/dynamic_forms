import React from 'react'
import MobileMenu from './Mobilemenu'
//import {Container} from 'semantic-ui-react'
import {Media,MediaContextProvider,mediaStyles } from '../../gloabalsMediaProvider'
import MenuComponent from './Menu'
import {  Switch, Route,BrowserRouter as Router} from 'react-router-dom';

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
                       <Route path="/Gallery"></Route>
                       <Route path="/AboutUs"></Route>
                       <Route path="/Process"></Route>
                       <Route path="/Infrastructure"></Route>
                       <Route path="/Home"></Route>
                  </Switch>
                  </Router>
 
         </MediaContextProvider>
        </div>
    )
}


export default TopBar;




