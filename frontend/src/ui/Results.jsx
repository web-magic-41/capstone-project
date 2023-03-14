import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ListingCard} from "./ListingCard.jsx";
import {fetchAllListings} from "../store/listings.js";
import { useDispatch, useSelector } from 'react-redux'


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
    const listings = useSelector(state => {
        if(state?.listings.constructor.name === "Object") {
            return Object.values(state.listings)
        } else []
    })

    const dispatch = useDispatch()

    const initialEffect = () => {
        dispatch(fetchAllListings())
    }

    React.useEffect(initialEffect, [])

    console.log("listing slice", listings)
console.log("test", test)

    return (
        <><div className="browse-background">
            <section className="home-image">
                <Container>
                    <Row>
                        <Col>
                            {
                                listings.map(listing=>  <ListingCard listing={listing}/>)
                             }

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
        </>
    )
}