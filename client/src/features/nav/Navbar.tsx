import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export const Navbar = () => {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
            Social App
          </Menu.Item>
          <Menu.Item name='Activities' />
          <Menu.Item>
            <Button positive content="Create Activity"/>
          </Menu.Item>
        </Container>
      </Menu>
    )
}
