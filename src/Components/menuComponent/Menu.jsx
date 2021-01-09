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
        <Menu secondary>
        <Menu.Item
          name='home'
          active={activeTab === 'home'}
          onClick={()=>onclickTab('home')}
        />
        <Menu.Item
          name='messages'
          active={activeTab === 'messages'}
          onClick={()=>onclickTab('messages')}
        />
        <Menu.Item
          name='friends'
          active={activeTab=== 'friends'}
          onClick={()=>onclickTab('friends')}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          
     <Menu.Item>
        <Dropdown item icon="user">
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default withRouter(MenuComponent);