import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";

import React from "react";
import * as Yup from "yup";
import {httpConfig} from "./componets/HttpConfig.js";
import {Formik} from "formik";


export function SignUp() {
    const signUp = {
        profileEmail: "Email",
        profileAtHandle: "User Name",
        profilePassword: "Password",
        profilePasswordConfirm: "Confirm Password",
        profilePhone: "Phone Number",
    }

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileAtHandle: Yup.string()
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
                        resetForm();
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
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username">
                                    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profileEmail} type="UserName" placeholder="UwU"/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className={"mb-3"}>
                                <FloatingLabel controlId="Password" label="Password">
                                    <Form.Control type="Password" placeholder="Password"/>
                                </FloatingLabel>
                            </Form.Group>
                            <Button className={"gy-3"} id={"button2"} variant="dark" size="lg">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
    )
        }