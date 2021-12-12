import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Dynamic Fitness</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/gyms'>Gyms</Nav.Link>
                        <Nav.Link href='/gyms/new'>Create a Gym</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar