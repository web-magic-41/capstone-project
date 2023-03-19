import React from "react"
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import mtgfinderlogo from "../Images/mtgfinderlogo.png";
import {useNavigate} from "react-router-dom";

export function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div id="dragon">

                <Container className="container-fluid justify-content-center align-items-center d-flex flex-column">
                    {/*<Row>*/}
                    {/*    <Col>*/}
                        <Image src={mtgfinderlogo} alt="An image that says 'Burque MTG Finder' in orange and black font" className="w-75"/>
                        <p className="homepage-text">Welcome to Burque MTG Finder!</p>
                    <div className="d-flex button-container">
                            <Button onClick={()=> navigate("/sign-in")} variant="dark">Login</Button>
                            <Button onClick={()=> navigate("/sign-up")} variant="dark">Sign Up</Button>
                    </div>
                        {/*</Col>*/}
                    {/*</Row>*/}
                </Container>
            </div>
        </>
    )
}

