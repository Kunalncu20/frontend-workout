import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Link to='/'>
      <Navbar.Brand >Workout Schedule</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         <Link to='/'>
         <Nav.Link >Home</Nav.Link>
         </Link>
         <Link to='/'>
         <Nav.Link >Link</Nav.Link>
         </Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent;