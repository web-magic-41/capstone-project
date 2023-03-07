import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

export function Results() {
    return (
        <>
            <section className="home-image">
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <p>Listing 1</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <p>Listing 2</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <p>Listing 3</p>
                            </Container>
                        </Col>


                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <p>Listing 4</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <p>Listing 5</p>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <p>Listing 6</p>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}