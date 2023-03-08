import React from "react";
import {Button, Card} from "react-bootstrap";


export function ListingCard(props) {
    return (
        <>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.txt.image}/>
            <Card.Body>
                <Card.Title>{props.txt.name}</Card.Title>
                <Card.Text>
                    {props.txt.price}
                </Card.Text>
                <Button variant="primary">View Listing</Button>
            </Card.Body>
        </Card>
        </>
    )
}