import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import cards from "../store/cards.js";


export function ListingCard({listing,profile,card}) {
    // console.log("profile HERE", profile)
    // console.log("props in listing card", listing)
    // console.log("card Name BROTHER", card)
    return (
        <>
        <Col>
        <Card>
            <Card.Img variant="top" src={listing.listingFrontImg}/>
            <Card.Img variant="top" src={listing.listingBackImg}/>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text >
                    <h4>{profile && profile.profileUsername}</h4>
                    <div>
                       <h5> {card && card.cardName} </h5>
                    </div>
                    <div>
                        {listing.listingCardDescription}
                        {" "}
                        {listing.listingCardDesiredValue}
                    </div>
                </Card.Text>
                <Button variant="primary">View Listing</Button>
            </Card.Body>
        </Card>
        </Col>
        </>
    )
}