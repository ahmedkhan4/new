import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsMoon } from 'react-icons/bs';

function NavScrollExample({toggleTheme}) {
    

      
    return (
        <>
            <Navbar expand="lg p-2" className='navbar'>
                <Container>
                    <Navbar.Brand href="#"><h1>Where in the world?</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex moonLight">
                            <BsMoon />
                            <Button className='moonLightBtn' onClick={() =>toggleTheme()}>Dark Mode</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavScrollExample;