import Button from 'react-bootstrap/Button';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import React from "react";
import BackgroundImg from "./images/High_resolution_wallpaper_background_ID_77701471505-1024x768.jpg"

let root = document.getElementById('root')
root.style.background = `url(${BackgroundImg})`
root.style.height = "100vh" //this isn't technically css, so ask george about it

export function Browse() {
    return (
        <>
<Container>
    <Row>
        <Col  className={'d-flex justify-content-center'}>
    <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                <Form.Control className={'search-bar'} type="Search Criteria" placeholder="Search Criteria" />
            </FloatingLabel>
        </Col>
    </Row>
</Container>
    <Button id={"search"} md={4} variant="dark" size="md">Search</Button>

        </>
    )
    }

