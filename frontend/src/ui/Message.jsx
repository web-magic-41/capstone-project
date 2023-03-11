import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";


export function Message() {
    return (
        <>
            <Container>
                <Row>
                    <Col>

            <FloatingLabel controlId="floatingTextarea2" label="Incoming">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />

            </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Outgoing">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button className={'w-25 align-self-end message '} id={"send"} md={4} variant="dark" size="md">Send</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
