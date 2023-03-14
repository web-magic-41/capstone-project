import Button from 'react-bootstrap/Button';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import React from "react";
import BackgroundImg from "../Images/jorge-jacinto-swamp-wasteland-by-jorgejacinto.jpg"


export function Browse() {
    return (
        <>
            <div className={`browse-background d-flex align-items-center`}>


                        <div className={''}>
                            <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                                <Form.Control className={'browse-search-bar'} type="Search Criteria"
                                              placeholder="Search Criteria"/>
                            </FloatingLabel>

                        </div>

                        <div className={``}>
                            <Button className={`button-browse`} md={4} variant="dark" size="md">Search</Button>
                        </div>




            </div>
        </>
    )
}

