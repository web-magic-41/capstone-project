import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import cat from "./cat.jpg";
import React from "react";
import star from "./star.jpg"
export function Profile() {
    return(
        <>
        <div id={"profile"}>
            <Container>
                <Row className={"mt-3"}>
                    <Col>
                        {/*<Image src={cat} fluid={true} alt="placeHolder"/>*/}
                        <h2 id={"username"} className={"d-inline ms-2"}>Username</h2>
                    </Col>

                    <Col>
                        <Form>
                            <Form.Group>
                        <Image className={"ms-2"} id={"star"} src={star} alt={"star1"}/>
                        <Image id={"star"} src={star} alt={"star1"}/>
                        <Image id={"star"} src={star} alt={"star1"}/>
                        <Image id={"star"} src={star} alt={"star1"}/>
                        <Image id={"star"} src={star} alt={"star1"}/>
                                <Button className={"ms-1"} id={"button2"} variant="dark" size="md">
                                    Rate User
                                </Button>
                                <Button className={"ms-2"} id={"button2"} variant="dark" size="md">
                                    Message
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={10} className={"justify-content-center mt-3"}>
                        <Form>
                            <Form.Group>
                                <FloatingLabel className={"mb-3"} controlId="floatingInput" label="Current Listings">
                                    <Form.Control type="cardName" placeholder='i.e "Waste Not"' style={{ height: '200px' }}/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatingMarket" label="Looking For">
                                    <Form.Control type="Market Value" placeholder="$43.22" style={{ height: '200px' }}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={2} className={"mt-3"}>
                        <Form>
                            <Form.Group>
                                <FloatingLabel controlId="Description" label="Rating Comments">
                                    <Form.Control type="Description" placeholder="blah blah" style={{ height: '415px' }}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}