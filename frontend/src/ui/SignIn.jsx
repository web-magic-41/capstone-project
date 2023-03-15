import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "./componets/HttpConfig.js";
import jwtDecode from "jwt-decode";
import {getAuth} from "../store/auth.js";
import {Formik} from "formik";
import {DisplayError} from "./componets/DisplayError.jsx";
import {DisplayStatus} from "./componets/DisplayStatus.jsx";
import {FormDebugger} from "./componets/FormDebugger.jsx";
import {Profile} from "./Profile.jsx";
import {redirect, useNavigate} from "react-router-dom";

export function SignIn() {
const navigate = useNavigate()
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("please provide a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("password is required")
            .min(8, "password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    //ask if you need to add something
    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);

                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))

                    setTimeout(() => {
                    navigate("/profile")
                    }, 1000);


                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik initialValues={signIn} onSubmit={submitSignIn} validationSchema={validator}>
                {SigninFormContent}
            </Formik>
        </>
    )
}

function SigninFormContent(props) {
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
    return (<div className={`signin-background`}>
            <div className={'d-flex flex-column align-items-center'}>

                <Form onSubmit={handleSubmit}>

                    <FloatingLabel className={'mb-3'} controlId="profileEmail" label="Email">
                        <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profileEmail}
                                      name={"profileEmail"} className={'signin-search-bar'} type="text"/>
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>

                    <FloatingLabel className={'mb-4'} controlId="profilePassword" label="Password">
                        <Form.Control className={'signin-search-bar'} onChange={handleChange} onBlur={handleBlur}
                                      name="profilePassword" value={values.profilePassword} type="password"/>
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                    <Button className={'align-self-end'} type={"submit"} id={"login"} md={4} variant="dark"
                            size="md">Login</Button>
                </Form>
            </div>
            <div className="pt-3">
                <DisplayStatus status={status} />
            </div>
      
        </div>
    )
}
