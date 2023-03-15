import Button from 'react-bootstrap/Button';
import {FloatingLabel, Form, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {fetchAllListings} from "../store/listings.js";
import {useDispatch, useSelector} from "react-redux";


export function Browse() {
    const listings = useSelector(state => state.listings ? state.listings : []);

    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllListings());
    };
    useEffect(effects, [dispatch]);

    return (
        <>
            <div className={`browse-background`}>

                <div className={`d-flex align-items-center`}>
                    <div className={''}>
                        <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                            <Form.Control className={'browse-search-bar'} type="Search Criteria"
                                          placeholder="Search Criteria"/>
                        </FloatingLabel>

                    </div>

                    <div className={``}>
                        <Button onClick={() => {
                            dispatch(fetchAllListings())
                        }
                        } className={`button-browse`} md={4} variant="dark" size="md">Search</Button>
                    </div>


                </div>
                <div>
                    {listings.map(listing => <>
                    <span>{listing.name}
                </span></>)}
                </div>
            </div>
        </>
    )
}

