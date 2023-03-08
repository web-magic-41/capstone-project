import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import React from "react";
import cat from "./cat.jpg"

export function ListACard() {
    return (
        <>
            <div id={"listACard"}>
            <Container className={"justify-content-center mt-3"}>
                <Row>
                    <Col id={"cat"} md={2} className={"mx-auto mb-3 d-block text-center"}>
                        <Image src={cat} fluid={true} alt="placeHolder"/>
                    </Col>
                    <Col md={8} className={"d-flex justify-form"}>
                        <Form id={"listingForm"}>
                            <Form.Group className={"mb-3"}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Card Name">
                                    <Form.Control type="cardName" placeholder='i.e "Waste Not"'/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="floatingMarket" label="Market Value">
                                    <Form.Control type="Market Value" placeholder="$43.22"/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className={"mb-3"}>
                            <FloatingLabel controlId="AskingValue" label="Asking Value">
                                <Form.Control type="Asking Value" placeholder="$43.22"/>
                            </FloatingLabel>
                        </Form.Group>
                            <Form.Group className={"mb-3"}>
                            <FloatingLabel controlId="Description" label="Description">
                                <Form.Control type="Description" placeholder="blah blah" style={{ height: '150px' }}/>
                            </FloatingLabel>
                        </Form.Group>
                            <Button id={"button1"} className={"me-3"} variant="dark" size="lg">
                                Cancel
                            </Button>
                            <Button className={"gy-3"} id={"button2"} variant="dark" size="lg">
                               Post Listing
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}