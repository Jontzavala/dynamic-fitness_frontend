import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Dynamic Fitness</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/gyms'>Gyms</Nav.Link>
                            <Nav.Link href='/gyms/new'>Create a Gym</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar