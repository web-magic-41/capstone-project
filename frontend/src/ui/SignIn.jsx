import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

export function SignIn() {
    return (
        <>
            <div className={`signin-background`}>
                <div className={'d-flex flex-column align-items-center'}>

                        <div className={''}>

                            <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="UserName">
                                <Form.Control className={'signin-search-bar'} type="Search Criteria"
                                              placeholder="Search Criteria"/>
                            </FloatingLabel>

                            <FloatingLabel className={'mb-4'} controlId="floatingPassword" label="Password">
                                <Form.Control className={'signin-search-bar'} type="Search Criteria"
                                              placeholder="Search Criteria"/>
                            </FloatingLabel>
                        </div>


                        <div className={``}>

                            <Button className={'align-self-end'} id={"login"} md={4} variant="dark"
                                    size="md">Login</Button>
                        </div>

                </div>
            </div>
        </>
    )
}
