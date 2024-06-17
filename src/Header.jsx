import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export const Header = () => {
  return (
    <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            Well's Fargo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header