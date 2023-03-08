import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ListingCard} from "./ListingCard.jsx";

const test = [
    {name: 'black lotus',
    price: '10000',
    image: 'image'},
    {name: 'sword to plowshares',
        price: '10',
        image: 'image1'},
    {name: 'edgar markov',
        price: '80',
        image: 'image2'}
];

export function Results() {
    return (
        <><div className="browse-background">
            <section className="home-image">
                <Container>
                    <Row>
                        <Col>
                            {
                                test?.map(x=>{ // noinspection JSValidateTypes
                                   return <ListingCard txt={x}/>})
                             }

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
        </>
    )
}