import React,{ useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink, Link,withRouter} from 'react-router-dom'
import { Menu,Dropdown, Button, } from 'semantic-ui-react'
import {LogoutApiCall} from "../Redux/UserDetails/UserDetails";


function MenuComponent(props) {
    const [activeTab, setactiveTab] = useState('home')
    const onclickTab = (name) => {
        setactiveTab(name)
    };
    const dispatch = useDispatch()
    const logout=()=>{
      dispatch(LogoutApiCall())

    }

    const userdata = useSelector(state => state.userdetails);

    return (
       
        <Menu style={{backgroundColor:"#f1f8ff"}} color="blue" secondary pointing>
          
    
        <Menu.Item as={NavLink} to='/Home'  name='home' active={activeTab === 'home'} onClick={()=>onclickTab('home')}/>
        {userdata.islogin ?(
          <Menu.Menu>
         <Menu.Item as={NavLink} to="/createdForms" name='createdforms' active={activeTab === 'createdforms'} onClick={()=>onclickTab('createdforms')} />
              <Menu.Item as={NavLink} to="/RespondToForm" name='RespondToForm' active={activeTab === 'RespondToForm'} onClick={()=>onclickTab('RespondToForm')} />
         </Menu.Menu>
        ):null
        }
        { userdata.islogin  ? 
        (
          <Menu.Menu position='right'>
          <Menu.Item>
            <Dropdown item  text={userdata.username[0].toUpperCase()}>
               <Dropdown.Menu>
                <Dropdown.Item >{userdata.email}</Dropdown.Item>
                 <Dropdown.Item as={Link} to="/ForgotPassword">change password</Dropdown.Item>
                 <Dropdown.Item as={Button} onClick={()=>logout()} >logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          </Menu.Menu>
        ):
        ( 
        <Menu.Menu position="right">
        <Button as={NavLink} active={activeTab === 'login'} to='/login' onClick={()=>onclickTab('login')} color="teal">SignIn</Button>
        <Button as={NavLink} active={activeTab === 'Register'} to="/Register" onClick={()=>onclickTab('Register')}  color="twitter">SignUp</Button>
        </Menu.Menu>)
       }
      </Menu>
    )
}

export default withRouter(MenuComponent);