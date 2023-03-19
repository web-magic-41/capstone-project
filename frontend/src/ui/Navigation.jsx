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
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="/sign-in">Sign In</Nav.Link>
                            <Nav.Link href="/browse">Browse</Nav.Link>
                            <Nav.Link href="/browseCard">Create Listing</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/messages">Messages</Nav.Link>
                            <Nav.Link href="/log-out">Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}