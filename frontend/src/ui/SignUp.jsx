import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";

import React from "react";
import * as Yup from "yup";
import {httpConfig} from "./componets/HttpConfig.js";
import {Formik} from "formik";
import {DisplayStatus} from "./componets/DisplayStatus.jsx";
import {DisplayError} from "./componets/DisplayError.jsx";
import {useNavigate} from "react-router-dom";


export function SignUp() {
    const navigate = useNavigate()
    const signUp = {
        profileEmail: "",
        profileAtHandle: "",
        profilePassword: "",
        profilePasswordConfirm: "",
        profilePhone: "",
    }

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileUsername: Yup.string()
            .required("profile handle is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),
        profilePhone: Yup.string()
            .min(10, "phone number is to short")
            .max(10, "phone Number is to long")
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        setTimeout(() => {
                            navigate("/profile")
                        }, 1000);
                       // resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };

    return (
        <>

            <Formik
                initialValues={signUp}
                onSubmit={submitSignUp}
                validationSchema={validator}>
                {SignUpFormContent}
            </Formik>
</>
            )
            }

            function SignUpFormContent(props) {
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

            <div id={"signUp"}>
            <Container className={" mt-5"}>
                <Row>
                    <Col className={"d-flex justify-content-center"}>
                        <Form id={"listingForm"}>

                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="profileUsername" label="Username">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profileUsername} type="text" placeholder="UwU"/>
                                </FloatingLabel>
                                <DisplayError errors={errors} touched={touched} field={"profileUsername"}/>
                            </Form.Group>

                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="profilePassword" label="Password">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profilePassword} type="password" placeholder="Password"/>
                                </FloatingLabel>
                                <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                            </Form.Group>

                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="profilePasswordConfirm" label="Confirm Password">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profilePasswordConfirm}type="password" placeholder="Confirm Password"/>
                                </FloatingLabel>
                                <DisplayError errors={errors} touched={touched} field={"profilePasswordConfirm"}/>
                            </Form.Group>

                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="profileEmail" label="Email">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profileEmail} type="email" placeholder="Email"/>
                                </FloatingLabel>
                                <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                            </Form.Group>

                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="profilePhone" label="Phone Number">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profilePhone}type="tel" placeholder="Phone Number"/>
                                </FloatingLabel>
                                <DisplayError errors={errors} touched={touched} field={"profilePhone"}/>
                            </Form.Group>

                            <Button className={"gy-3"} id={"button2"} variant="dark" size="lg">
                                Login
                            </Button>
                            <DisplayStatus status={status} />
                        </Form>
                    </Col>
                </Row>
            </Container>

            </div>
    )
        }