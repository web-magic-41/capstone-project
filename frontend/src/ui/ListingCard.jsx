import React from "react";
import {Button, Card} from "react-bootstrap";


export function ListingCard({listing}) {

    console.log("props in listing card", listing)
    return (
        <>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={listing.listingFrontImg}/>
            <Card.Img variant="top" src={listing.listingBackImg}/>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text >
                    {listing.listingCardDescription}
                    {listing.listingCardDesiredValue}

                </Card.Text>
                <Button variant="primary">View Listing</Button>
            </Card.Body>
        </Card>
        </>
    )
}