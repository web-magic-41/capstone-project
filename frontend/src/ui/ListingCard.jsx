import React from "react";
import {Button, Card} from "react-bootstrap";
import cards from "../store/cards.js";


export function ListingCard({listing,profile,card}) {
    console.log("profile HERE", profile)
    console.log("props in listing card", listing)
    console.log("card Name BROTHER", card)
    return (
        <>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={listing.listingFrontImg}/>
            <Card.Img variant="top" src={listing.listingBackImg}/>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text >
                    {profile && profile.profileUsername}
                    <div>
                        {card && card.cardName}
                    </div>
                </Card.Text>
                <Card.Text>
                    {listing.listingCardDescription}
                    {" "}
                    {listing.listingCardDesiredValue}

                </Card.Text>
                <Button variant="primary">View Listing</Button>
            </Card.Body>
        </Card>
        </>
    )
}