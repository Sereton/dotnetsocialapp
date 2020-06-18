import React, { useContext } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';
import ActivityStore from '../../App/stores/activityStore'
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';



const NavBar: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    const {openCreateForm} = activityStore
    return (
            <Menu fixed='top' inverted>
        <Container>
        <Menu.Item
          header as={Link} to='/' >

              <img src="/assets/logo.png" alt="logo" style={{marginRight: "5px"}}/> Unamonos
          </Menu.Item>
          
        
        <Menu.Item
          name='Activities'
          as={Link} to='/activities'
          
        />
        <Menu.Item
        
         
         
        >
            <Button as={Link} to='/createActivity' onClick={openCreateForm} color="brown" content= "Create Activity" />
        </Menu.Item>
        </Container>
      </Menu>
       
    )
}

export default observer(NavBar);