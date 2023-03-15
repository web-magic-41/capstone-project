import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ListingCard} from "./ListingCard.jsx";
import {fetchAllListings} from "../store/listings.js";
import {selectProfile} from "../store/profile.js";
import { useDispatch, useSelector } from 'react-redux'


export function Results() {



    const listings = useSelector(state => {
        if(state?.listings.constructor.name === "Object") {
            return Object.values(state.listings)
        } else return []
    })

    const profile = useSelector(state => {
        if(state?.profile?.constructor.name === "Object") {
            return Object.values(state.profile)
        } else return {}
    })

    const dispatch = useDispatch()

    const initialEffect = () => {
        dispatch(fetchAllListings())
        dispatch(selectProfile())
    }

    React.useEffect(initialEffect, [])

    console.log("listing slice", listings)
    console.log("Profile slice", profile)



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