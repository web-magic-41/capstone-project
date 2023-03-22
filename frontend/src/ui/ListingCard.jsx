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
        <Card id={"cardHeight"} className={' card-drop-shadow'}>
            <div className={"cardImageWrapper"}>
            <Card.Img variant="top" className={"cardImage"} src={`${listing.listingFrontImg.replaceAll("&#x2F;","/")}`}/>
            {/*<Card.Img variant="top" src={listing.listingBackImg}/>*/}
            </div>
            <Card.Body className={"h-100"}>

                <Card.Title></Card.Title>

                <Card.Text id={"cardTextWrapper"}>
                    <div id={"cardText"}>
                    <h2>{card && card.cardName}  </h2>
                        <h2>{listing.listingCardDesiredValue}</h2>

                       <p>Listed by: {profile && profile.profileUsername}</p>


                        {listing.listingCardDescription}


                    </div>
                </Card.Text>

                <Button id={"button1"} className={"align-self-end mt-3"} variant="primary">Message {profile && profile.profileUsername}</Button>

            </Card.Body>
        </Card>
        </Col>
        </>
    )
}