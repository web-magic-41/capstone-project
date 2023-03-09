import React from "react"
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import mtgfinderlogo from "../Images/mtgfinderlogo.png";

export function Home() {
    return (
        <>
            <div id="dragon">
                <Container className="container-fluid justify-content-center align-items-center d-flex flex-column">
                    {/*<Row>*/}
                    {/*    <Col>*/}
                        <Image src={mtgfinderlogo} alt="An image that says 'Burque MTG Finder' in orange and black font" className="w-75"/>
                        <p className="homepage-text">Welcome to Burque MTG Finder!</p>
                    <div className="d-flex button-container">
                            <Button variant="dark">Login</Button>
                            <Button variant="dark">Sign Up</Button>
                    </div>
                        {/*</Col>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        </>
    )
}

