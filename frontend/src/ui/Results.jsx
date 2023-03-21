import React, {useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ListingCard} from "./ListingCard.jsx";
import {fetchAllListings} from "../store/listings.js";
import { useDispatch, useSelector } from 'react-redux'
import card from "../store/card.js";


export function Results() {



    const listings = useSelector(state => {
        if(state?.listings.constructor.name === "Object") {
            return Object.values(state.listings)
        } else return []
    })
    const [cardName, setCardName] = useState(location.pathname.substr(9).length >0? decodeURI(location.pathname.substr(9)).toLowerCase() : "")


//filter listings by cardName
    const handleSetCardName = (str) => {
        setCardName(str)
    }
    console.log(cardName)

    const profiles = useSelector(state => state?.profiles ? state.profiles : {})

    const cards = useSelector(state => state?.donovansCards ? state.donovansCards : {})

    const dispatch = useDispatch()

    const initialEffect = () => {
        dispatch(fetchAllListings())
    }

    React.useEffect(initialEffect, [])

    //console.log("listing slice", listings)
    //console.log("Profile slice", profiles)
    //console.log("card slice", cards)


    console.log(listings)
    let filteredListings = listings.length > 0 ? listings.filter((listing) => {
        //console.log(cards[listing?.listingCardId]?.cardName)
        //console.log(cards[listing?.listingCardId]?.cardName?.toLowerCase().includes(cardName))
        return cards[listing?.listingCardId]?.cardName?.toLowerCase().includes(cardName)
    }) : listings
    console.log(filteredListings)

    return (
        <><div className="browse-background">
            <section className="">
                <Container className={"mt-3"}>
                    <Row xs={1} md={4} className={"g-4"}>

                            { filteredListings.length > 0 ?
                                filteredListings.map(listing=>  <ListingCard profile={profiles[listing.listingProfileId]} card={cards[listing.listingCardId]} listing={listing}/>)
                                : <h3 className={`text-light`}>There are no card listings for the searched card name, please try finding another card.</h3>

                             }


                    </Row>
                </Container>
            </section>
        </div>
        </>
    )
}