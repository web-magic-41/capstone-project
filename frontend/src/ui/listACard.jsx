import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import React from "react";
import cat from "./cat.jpg"
import {httpConfig} from "../../utils/http-config.js";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Formik} from "formik";

export function ListACard() {

    // need a validator
    // need a submit listing handler

    const listing = {
        listingCardDescription: "",
        listingCardDesiredValue: "",
        cardName: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        cardName: Yup.string()
            .required("card name is required"),
        listingCardDescription: Yup.string()
            .required("card description is required"),
        listingCardDesiredValue: Yup.string()
            .required("card desired value is required"),
    });

    const submitListing = (values, {resetForm, setStatus}) => {
        const listingProfileId = auth?.profileId ?? null
        let listingFrontImg = 'frontImage temporary text';
        let listingBackImg = 'backImage temporary text';
        // need listingCardId

        const listing = {listingProfileId, listingFrontImg, listingBackImg, listingClaimed: false, ...values}
        console.log(listing)
        httpConfig.post("/apis/listing/", listing)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllListings())
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={listing}
            onSubmit={submitListing}
            validationSchema={validator}
        >
            {ListingFormContent}
        </Formik>

    )
};

function ListingFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;


    return (
        <>
            <div id={"listACard"}>
                <Container className={"justify-content-center mt-3"}>
                    <Row>
                        <Col id={"cat"} md={2} className={"mx-auto mb-3 d-block text-center"}>
                            <Image src={cat} fluid={true} alt="placeHolder"/>
                        </Col>
                        <Col md={8} className={"d-flex justify-form"}>
                            <Form id={"listingForm"} onSubmit={handleSubmit}>
                                <Form.Group className={"mb-3"} controlId={'cardName'}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Card Name">
                                        <Form.Control type="cardName" placeholder='i.e "Waste Not"'/>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className={"mb-3"} controlId={'listingCardDesiredValue'}>
                                    <FloatingLabel controlId="AskingValue" label="Asking Value">
                                        <Form.Control type="listingCardDesiredValue" placeholder="$43.22"/>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className={"mb-3"} controlId={'listingCardDescription'}>
                                    <FloatingLabel controlId="Description" label="Description">
                                        <Form.Control type="listingCardDescription" placeholder="blah blah"
                                                      style={{height: '150px'}}/>
                                    </FloatingLabel>

                                </Form.Group>
                                <Form.Group>
                                <button id={"button1"} className={"me-3"}
                                        variant="dark" size="lg"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}>
                                    Cancell
                                </button>
                                <button className={"gy-3"} id={"button2"} variant="dark" size="lg" type={'submit'}>
                                    Post Listing
                                </button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}