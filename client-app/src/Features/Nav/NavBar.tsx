import React from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';

export const NavBar = () => {
    return (
            <Menu fixed='top' inverted>
        <Container>
        <Menu.Item
          header >

              <img src="/assets/logo.png" alt="logo" style={{marginRight: "5px"}}/> Unamonos
          </Menu.Item>
          
        
        <Menu.Item
          name='Activities'
          
        />
        <Menu.Item
         
         
        >
            <Button color="brown" content= "Create Activity" />
        </Menu.Item>
        </Container>
      </Menu>
       
    )
}
