import React from 'react'
import Link from 'next/link'

import { Container, Nav, Navbar } from 'react-bootstrap'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand>App</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Link href="/auth/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Navigation
