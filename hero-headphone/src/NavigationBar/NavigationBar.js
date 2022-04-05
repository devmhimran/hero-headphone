import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HeaderLogo from '../assets/img/hero-headphone-logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand className='navbar__logo' href="#home"><img src={HeaderLogo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        
        </Navbar>
        
    );
};

export default NavigationBar;