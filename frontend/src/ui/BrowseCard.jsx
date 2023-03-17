import {FloatingLabel, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "./componets/HttpConfig.js";
import {setCards} from "../store/card.js";
import * as Yup from "yup"
export function BrowseCard() {

    const card = {
        cardName: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);


    const validator = Yup.object().shape({
        cardName: Yup.string()
            .required("Card Name is required"),
    });

    const getCards = (values, {resetForm, setStatus}) => {

        const card = {...values}
        httpConfig.post("/apis/card/cardName/", card)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                        if (reply.data === null) {
                            setStatus("no cards found")
                        } else{
                            dispatch(setCards(reply.data))
                        }

                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={card}
            onSubmit={getCards}
            validationSchema={validator}
        >
            {BrowseCardForm}
        </Formik>

    )

}

function BrowseCardForm(props) {
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
            <div className={`browse-background d-flex align-items-center`}>
                <p className="browsecard-text">Select a card name to create a listing for that card.</p>
                <Form onSubmit={handleSubmit}>

                    <div className={''}>

                        <FloatingLabel className={'mb-3'} controlId="cardName" label="Search">
                            <Form.Control className={'browse-search-bar'} onChange={handleChange} onBlur={handleBlur}
                                          name={"cardName"} value={values.cardName}type="search"
                                          placeholder="Search Criteria"/>
                        </FloatingLabel>

                    </div>

                    <div className={``}>
                        <Button className={`button-browse`} type={"submit"} md={4} variant="dark" size="md">Search</Button>


                    </div>
                </Form>
            </div>
        </>
    )
}

