import React from 'react'
import {Menu,Dropdown,Image} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
function MobileMenu() {
    return (
        <Menu fixed={'top'} style={{color:"#333"}} borderless={true}  inverted   > 
            
        <Dropdown  item icon ='bars' >
               <Dropdown.Menu   >
                  <Dropdown.Item as={Link} to='/Home' text='Home'>HOME</Dropdown.Item>
                  <Dropdown.Item as={Link} to='Infrastructure' text='InfraStructure'>InfraStructure</Dropdown.Item>
                  <Dropdown.Item as={Link} to='process'  text='InfraStructure'>Process</Dropdown.Item>
                  <Dropdown.Item as={Link} to="AboutUs" text='About'/>
                  <Dropdown.Item as={Link} to="Gallery" text="Gallery"/>
            </Dropdown.Menu>
         
        </Dropdown>
       
        <Menu.Item  position="left">
         
         </Menu.Item>


      
        </Menu>
    )
}
export default withRouter(MobileMenu);