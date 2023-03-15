import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../componets/HttpConfig.js";
import jwtDecode from "jwt-decode";
import {getAuth} from "../componets/Auth.js";
import {Formik} from "formik";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DisplayError} from "../componets/DisplayError.jsx";
import Button from "react-bootstrap/Button";
import {DisplayStatus} from "../componets/DisplayStatus.jsx";
import {FormDebugger} from "../componets/FormDebugger.jsx";
export const SignInForm = () => {

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};

function SignInFormContent(props) {
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

            <Form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group className="mb-1" controlId="profileEmail">
                    <Form.Label>email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="envelope"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileEmail"
                            type="text"
                            value={values.profileEmail}
                            placeholder="your@email.you"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"} />
                </Form.Group>

                <FontAwesomeIcon icon="key"/>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className="mb-1" controlId="profileAtHandle">
                    <Form.Label>password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="key"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profilePassword"
                            type="text"
                            value={values.profilePassword}
                            placeholder="p@ssword1"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
                </Form.Group>

                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                    {" "}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>
            </Form>
            <div className="pt-3">
                <DisplayStatus status={status} />
            </div>
            <FormDebugger {...props}/>
        </>
    )
}
