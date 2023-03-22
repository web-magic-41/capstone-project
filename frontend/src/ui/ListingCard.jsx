import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import cards from "../store/cards.js";



export function ListingCard({listing,profile,card}) {
    // console.log("profile HERE", profile)
    // console.log("props in listing card", listing)
    // console.log("card Name BROTHER", card)
    return (
        <>

        <Col className={"mt-3"}>
        <Card className={'h-100 card-drop-shadow'}>
            <div className={"cardImageWrapper"}>
            <Card.Img variant="top" className={"cardImage"} src={`${listing.listingFrontImg.replaceAll("&#x2F;","/")}`}/>
            {/*<Card.Img variant="top" src={listing.listingBackImg}/>*/}
            </div>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text id={"cardTextWrapper"}>
                    <div id={"cardText"}>
                    <h2>{card && card.cardName} {listing.listingCardDesiredValue} </h2>
                    <div>
                       <p>Listed by: {profile && profile.profileUsername}</p>
                    </div>
                    <div>
                        {listing.listingCardDescription}
                    </div>
                    </div>
                </Card.Text>
                <Button variant="primary">Message {profile && profile.profileUsername}</Button>
            </Card.Body>
        </Card>
        </Col>
        </>
    )
}