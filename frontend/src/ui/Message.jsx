import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";


export function Message() {
    return (
        <>
            <div className={`message-background d-flex align-items-center`}>


            {/*<FloatingLabel className={`mb-3`} controlId="floatingTextarea2" label="Message History">*/}
            {/*    <Form.Control*/}
            {/*        as="textarea"*/}
            {/*        placeholder="Leave a comment here"*/}
            {/*        style={{ height: '200px', width:`500px` }}*/}
            {/*    />*/}
            <div className={`message-history-placeholder`}>
                <span className={`message-history-placeholder-text`}>
                    Message History Placeholder
                </span>
            </div>
            {/*</FloatingLabel>*/}
                        <FloatingLabel className={`mb-3`} controlId="floatingTextarea2" label="Outgoing">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '200px', width:`500px` }}
                            />
                        </FloatingLabel>
                        <Button className={''} md={4} variant="dark" size="md">Send</Button>
            </div>
        </>
    );
}
