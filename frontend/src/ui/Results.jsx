import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ListingCard} from "./ListingCard.jsx";
import {fetchAllListings} from "../store/listings.js";
import { useDispatch, useSelector } from 'react-redux'


export function Results() {



    const listings = useSelector(state => {
        if(state?.listings.constructor.name === "Object") {
            return Object.values(state.listings)
        } else return []
    })

    const profiles = useSelector(state => state?.profiles ? state.profiles : {})

    const cards = useSelector(state => state?.cards ? state.cards : {})

    const dispatch = useDispatch()

    const initialEffect = () => {
        dispatch(fetchAllListings())
    }

    React.useEffect(initialEffect, [])

    console.log("listing slice", listings)
    console.log("Profile slice", profiles)
    console.log("card slice", cards)



    return (
        <><div className="browse-background">
            <section className="home-image">
                <Container className={"mt-3"}>
                    <Row xs={1} md={4} className={"g-4"}>

                            {
                                listings.map(listing=>  <ListingCard profile={profiles[listing.listingProfileId]} card={cards[listing.listingCardId]} listing={listing}/>)

                             }


                    </Row>
                </Container>
            </section>
        </div>
        </>
    )
}