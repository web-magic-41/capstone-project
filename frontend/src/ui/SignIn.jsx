import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

export function SignIn() {
    return (
        <>
            <Container className={'h-100'}>
                <Row className={''}>
                    <Col  className={'d-flex justify-content-center flex-column'}>

                        <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="UserName">
                            <Form.Control className={'username'} type="Search Criteria" placeholder="Search Criteria" />
                        </FloatingLabel>

                        <FloatingLabel className={'mb-4'} controlId="floatingPassword" label="Password">
                            <Form.Control className={'password'} type="Search Criteria" placeholder="Search Criteria" />
                        </FloatingLabel>

            <Button className={'w-25 align-self-end'} id={"login"} md={4} variant="dark" size="md">Login</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
