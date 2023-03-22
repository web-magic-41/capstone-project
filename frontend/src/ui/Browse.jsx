import Button from 'react-bootstrap/Button';
import {Container, FloatingLabel, Form, InputGroup, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {fetchAllListings} from "../store/listings.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DisplayStatus} from "./componets/DisplayStatus.jsx";
import {DisplayError} from "./componets/DisplayError.jsx";
import {Formik} from "formik";
import * as Yup from "yup";


export function Browse() {

    const navigate = useNavigate();
    //step one:get listings
    const listings = useSelector(state => state.listings ? state.listings : []);

    const card = {
        cardName: "",
    };
    const validator = Yup.object().shape({
        cardName: Yup.string()
            .required("card name is required"),
    });
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllListings());
    };
    useEffect(effects, [dispatch]);


    //step two:filter listings

    //need to JOIN listing and card tables in getAllListings()

    //step three:put filtered listings into state

    //step four: redirect to results page
    //

    const submit = (values, {resetForm, setStatus}) => {

        console.log('test')
        console.log(values)
        let cardQuery = encodeURI(values.cardName)

        setTimeout(() => {
            navigate(`/results/${cardQuery}`)
        }, 1000);
    }

    return (
        <>
            <div className={`browse-background pt-5 d-flex flex-column align-items-center justify-content-start`}>
                <Formik
                    initialValues={card}
                    onSubmit={submit}
                    validationSchema={validator}
                >
                    {BrowseListingForm}
                </Formik>
            </div>
        </>
    )
}

function BrowseListingForm(props) {

    const {
        setFieldValue,
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
        <div className={'browseCardSearchContainer'}>
            <p className="browsecard-text">Search for Listings</p>
            <Form onSubmit={handleSubmit}>
                <div className={``}>
                {/*<div className={`d-flex justify-content-center align-items-center pt-5 h-100`}>*/}
                    <div className={''}>
                        <Form.Group controlId="cardName">
                        <FloatingLabel className={'mb-3'}  label="Search">
                            <Form.Control
                                className={'browse-search-bar'}
                                type="Search Criteria"
                                placeholder="Search Criteria"
                                name={"cardName"}
                                value={values.cardName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FloatingLabel>
                        </Form.Group>
                    </div>

                    <div className={``}>
                        <Button type={'submit'}
                        className={`button-browse`} md={4} variant="dark" size="md">Search</Button>
                    </div>
                </div>
            </Form>


        </div>
    )
}