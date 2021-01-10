import React,{useState} from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Menu,Dropdown, } from 'semantic-ui-react'

function MenuComponent() {
    const [activeTab, setactiveTab] = useState('Home')
    var onclickTab=(name)=>{
        setactiveTab(name)
        console.log(name)
    }
  
    return (
        <Menu secondary pointing>
        <Menu.Item name='home' active={activeTab === 'home'} onClick={()=>onclickTab('home')}/>
        <Menu.Item name='createform' active={activeTab === 'messages'} onClick={()=>onclickTab('messages')} />
        <Menu.Item  name='respondedForm' active={activeTab=== 'friends'} onClick={()=>onclickTab('friends')} />
        <Menu.Menu position='right'>
         
          
        <Menu.Item>
          <Dropdown item icon="user">
             <Dropdown.Menu>
              <Dropdown.Header>userName</Dropdown.Header>
               <Dropdown.Item>settings</Dropdown.Item>
               <Dropdown.Item>change password</Dropdown.Item>
               <Dropdown.Item>logout</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default withRouter(MenuComponent);