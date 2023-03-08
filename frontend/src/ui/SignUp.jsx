import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";

import React from "react";


export function SignUp() {
    return (
        <>
            <div id={"signUp"}>
            <Container className={" mt-5"}>
                <Row>
                    <Col className={"d-flex justify-content-center"}>
                        <Form id={"listingForm"}>
                            <Form.Group className={"mb-3"}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username">
                                    <Form.Control type="UserName" placeholder="UwU"/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="Password" label="Password">
                                    <Form.Control type="Password" placeholder="Password"/>
                                </FloatingLabel>
                            </Form.Group>
                            <Button className={"gy-3"} id={"button2"} variant="dark" size="lg">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}