import {Button, Col, Container, FloatingLabel, Form, Image, InputGroup, Row} from "react-bootstrap";
import React from "react";
import cat from "./cat.jpg"
import {httpConfig} from "../../utils/http-config.js";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Formik} from "formik";
import {DisplayError} from "./componets/DisplayError.jsx";

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
                                        label="Card Name"/>

                                    <InputGroup>

                                        <Form.Control
                                            className={``}
                                            name={"cardName"}
                                            value={values.cardName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            placeholder='i.e "Waste Not"'/>
                                    </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={"cardName"}/>
                                </Form.Group>


                                <Form.Group className={"mb-3"} controlId={'listingCardDesiredValue'}>
                                    <FloatingLabel controlId="AskingValue" label="Asking Value"/>
                                    <InputGroup>
                                        <Form.Control
                                            className={``}
                                            name={"listingCardDesiredValue"}
                                            value={values.listingCardDesiredValue}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            placeholder="$43.22"/>
                                        </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={"listingCardDesiredValue"}/>
                                </Form.Group>


                                <Form.Group className={"mb-3"} controlId={'listingCardDescription'}>
                                    <FloatingLabel controlId="Description" label="Description"/>
                                    <InputGroup>
                                        <Form.Control
                                            className={``}
                                            name={"listingCardDescription"}
                                            value={values.listingCardDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            placeholder="blah blah"
                                            style={{height: '150px'}}/>
                                        </InputGroup>
                                    <DisplayError errors={errors} touched={touched} field={"listingCardDescription"}/>
                                </Form.Group>


                                <Form.Group>
                                <Button id={"button1"} className={"me-3"}
                                        variant="dark" size="lg"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}>
                                    Cancel
                                </Button>
                                <Button className={"gy-3"} id={"button2"} variant="dark" size="lg" type={'submit'}>
                                    Post Listing
                                </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}