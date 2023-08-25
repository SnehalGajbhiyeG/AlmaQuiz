import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function Navbar2() {
    return (
        <>
           
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="150"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Quiz">My Quiz</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Navbar2;