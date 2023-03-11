import Button from 'react-bootstrap/Button';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import React from "react";
import BackgroundImg from "../Images/jorge-jacinto-swamp-wasteland-by-jorgejacinto.jpg"


export function Browse() {
    return (
        <>
            <div className={`browse-background`}>
                <Container>
                    <Row>
                        <Col className={'d-flex justify-content-center'}>
                            <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                                <Form.Control className={'browse-search-bar'} type="Search Criteria"
                                              placeholder="Search Criteria"/>
                            </FloatingLabel>

                        </Col>
                    </Row>

                    <Row>
                        <Col className={`d-flex justify-content-end`}>
                        <Button md={4} variant="dark" size="md">Search</Button>
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    )
}

