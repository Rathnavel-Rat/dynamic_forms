import React from 'react'
import {Menu,Dropdown, Button} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'
function MobileMenu() {

    var userdata=useSelector(state=>state.userdetails)
    return (
        <Menu fixed={'top'} style={{color:"#333"}} borderless={true}    > 
        
            
        {userdata.islogin===false ?(
        <Dropdown  item icon ='bars' >
                <Dropdown.Menu   >
                  <Dropdown.Item as={Link} to='/Home' text='Home'/>
                </Dropdown.Menu>
         
         
        </Dropdown>):(
            
        <Dropdown  item icon ='bars' >
                 <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/RespondedForm' text='RespondedForm'/>
                  <Dropdown.Item as={Link} to='/CreatedForm'  text='CreatedForm'/>
                  <Dropdown.Item  text='logout'/>
                </Dropdown.Menu>
         
        </Dropdown>)}
        {userdata.islogin ?  (<Menu.Item position="right">{userdata.username[0].toUpperCase()}</Menu.Item>):(

        <Menu.Item  position="right">
                <Button as={Link}  color="teal" to='/Login'  >Login</Button>
                <Button as={Link} to='/Register' color="twitter" >Register</Button>
         </Menu.Item>
         
         )}


      
        </Menu>
    )
}
export default withRouter(MobileMenu);