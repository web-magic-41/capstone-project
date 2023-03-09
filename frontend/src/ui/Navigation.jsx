import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import mtgfinderlogowhite from "../Images/mtgfinderlogowhite.png"

export function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="vh-10 navbarfont">
                <Container fluid>
                    <Navbar sticky="top" />
                    <Navbar.Brand href="Home">Home</Navbar.Brand>
                    <img
                        alt="INSERT ALT HERE"
                        src={mtgfinderlogowhite}
                        width="100"
                        height="75"
                        className="d-inline-block align-top"
                    />{' '}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="Sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="Sign-in">Sign In</Nav.Link>
                            <Nav.Link href="Browse">Browse</Nav.Link>
                            <Nav.Link href="Profile">Profile</Nav.Link>
                            <Nav.Link href="Messages">Messages</Nav.Link>
                            <Nav.Link href="Log-out">Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}