// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom';

import '../../tailwind.css'


// eslint-disable-next-line react/prop-types
function VNavBar({ setToken }) {
  return(
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container fluid className='px-4'>
          <Navbar.Brand href="/">Librazen</Navbar.Brand>
          <Nav variant='underline'>
            <Nav.Link href="/catalogue">Catalogue</Nav.Link>
          </Nav>
          <Nav variant='underline'>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link 
              onClick={() => {
                sessionStorage.removeItem('token');
                setToken(false);
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default VNavBar;
