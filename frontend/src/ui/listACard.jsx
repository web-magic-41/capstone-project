import {Button, Col, Container, FloatingLabel, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import cat from "./cat.jpg"
import {httpConfig} from "../../utils/http-config.js";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Formik} from "formik";
import {DisplayError} from "./componets/DisplayError.jsx";
import {useDropzone} from "react-dropzone";
import {DisplayStatus} from "./componets/DisplayStatus.jsx";
import {fetchCurrentUser} from "../store/profile.js";

export function ListACard({match}) {
    const [card, setCard] = useState({});
    const handleCard = (obj) => {
        setCard(obj)
    }

    const listing = {
        listingCardDescription: "",
        listingCardDesiredValue: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})

    const sideEffects = () => {
        dispatch(fetchCurrentUser())
    }
    const validator = Yup.object().shape({
        listingFrontImg: Yup.mixed(),
        listingCardDescription: Yup.string()
            .required("card description is required"),
        listingCardDesiredValue: Yup.string()
            .required("card desired value is required"),
    });

    const getCard = (cardId) => {
        httpConfig.get(`/apis/card/cardId/${cardId}`)
            .then(reply => {
                    if (reply.status === 200) {
                        //console.log(reply.data[0])
                        handleCard(reply.data[0]);
                    }
                }
            );
    };

    useEffect(() => {
        if (!card?.cardName) {
            getCard(location.pathname.substr(11))
        }
    })

    const submitListing = (values, {resetForm, setStatus}) => {
        const listingProfileId = profile.profileId;
        //let listingFrontImg = 'frontImage temporary text';
        let listingBackImg = 'backImage temporary text';
        let listingCardId = location.pathname.substr(11) ? location.pathname.substr(11) : null;


        console.log(JSON.stringify(values.listingFrontImg))

        const listing = {listingProfileId, listingBackImg, listingClaimed: false,listingCardId: listingCardId, ...values}
        console.log(listing)

        const listingPost = (updatedListing) => {
            httpConfig.post("/apis/listing/", updatedListing)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            resetForm();
                            dispatch(fetchAllListings())
                        }
                        setStatus({message, type});
                    }
                );
        }
        if (values.listingFrontImg !== undefined) {

            console.log(`shit broke`)
            httpConfig.post(`/apis/image-upload/`, values.listingFrontImg)
                .then(reply => {
                        let { message, type } = reply

                        if (reply.status === 200) {
                            listingPost({ ...listing, listingFrontImg: message })
                        } else {
                            setStatus({ message, type })
                        }
                    }
                )
        } else {
            listingPost(values)
        }

    };


    React.useEffect(sideEffects, [dispatch])
    return (
        <Formik
            initialValues={listing}
            onSubmit={submitListing}
            validationSchema={validator}
        >
            {ListingFormContent}
        </Formik>

    )
}

function ListingFormContent(props) {
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
        <>
            <div id={"listACard"}>
                <Container className={"justify-content-center mt-3"}>

                    <Row>
                        <Form id={"listingForm"} onSubmit={handleSubmit}>
                            <div className={``}>
                                <ImageDropZone
                                    formikProps={{
                                        values,
                                        handleChange,
                                        handleBlur,
                                        setFieldValue,
                                        fieldValue: 'listingFrontImg'
                                    }}
                                />

                                <Form.Group className={"mt-3"}>
                                    <Button className="btn btn-primary" type="submit">Submit</Button>
                                    {' '}
                                    <Button
                                        className="btn btn-danger"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >Reset
                                    </Button>
                                </Form.Group>
                                <DisplayStatus status={status}/>
                            </div>


                            {/*<Form.Group className={"mb-3"} controlId={'cardName'}>*/}
                            {/*    <FloatingLabel*/}
                            {/*        controlId="floatingInput"*/}
                            {/*        label="Card Name"/>*/}

                            {/*    <InputGroup>*/}

                            {/*        <Form.Control*/}
                            {/*            className={``}*/}
                            {/*            name={"cardName"}*/}
                            {/*            value={values.cardName}*/}
                            {/*            onChange={handleChange}*/}
                            {/*            onBlur={handleBlur}*/}
                            {/*            type="text"*/}
                            {/*            placeholder='i.e "Waste Not"'/>*/}
                            {/*    </InputGroup>*/}
                            {/*    <DisplayError errors={errors} touched={touched} field={"cardName"}/>*/}
                            {/*</Form.Group>*/}


                            {/*<div className={`d-flex flex-column`}>*/}
                                <Form.Group className={"mb-3"} controlId={'listingCardDesiredValue'}>
                                    <FloatingLabel label="Asking Value"/>
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
                                    <FloatingLabel label="Description"/>
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

                            {/*</div>*/}

                        </Form>
                        <DisplayStatus status={status} />
                    </Row>
                </Container>
            </div>
        </>
    )
}


function ImageDropZone({formikProps}) {

    const onDrop = React.useCallback(acceptedFiles => {

        const formData = new FormData()
        formData.append('image', acceptedFiles[0])

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Form.Group className={"mb-3"} {...getRootProps()}>
            <Form.Label>Image of card</Form.Label>
            <InputGroup size="lg" className="">
                {
                    formikProps.values.listingFrontImg &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image fluid={true} height={100} rounded={true} thumbnail={true} width={100}
                                   alt="front image" src={formikProps.values.listingFrontImg}/>
                        </div>

                    </>
                }
                <div
                    className="d-flex flex-fill bg-light justify-content-center align-items-center border rounded vh-25 mousehover">
                    <FormControl
                        aria-label="front image file drag and drop area"
                        aria-describedby="image drag drop area"
                        className="form-control-file"
                        accept="image/*"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        {...getInputProps()}
                    />
                    {
                        isDragActive ?
                            <span className="align-items-center">Drop image here</span> :
                            <span className="align-items-center">Drag and drop image of card here, or click here to select an image</span>
                    }
                </div>


            </InputGroup>
        </Form.Group>
    )
}
