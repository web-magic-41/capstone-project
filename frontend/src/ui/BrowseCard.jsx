import {FloatingLabel, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "./componets/HttpConfig.js";

export function BrowseCard() {

        const card = {
            cardName: "",
        };

        const dispatch = useDispatch()

        const auth = useSelector(state => state.auth ? state.auth : null);

    let Yup;
    const validator = Yup.object().shape({
            cardName: Yup.string()
                .required("Card Name is required"),
        });

        const getCards = (values, {resetForm, setStatus}) => {
            const profileId = auth?.profileId ?? null
            const tweet = {profileId, ...values}
            httpConfig.post("/apis/tweet/", tweet)
                .then(reply => {
                        let {message, type} = reply;

                        if(reply.status === 200) {
                            resetForm();
                            dispatch(fetchAllTweets())
                        }
                        setStatus({message, type});
                    }
                );
        };


        return (
            <Formik
                initialValues={tweet}
                onSubmit={submitTweet}
                validationSchema={validator}
            >
                {BrowseCard}
            </Formik>

        )

}
  function BrowseCard(props){
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

                        <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                            <Form.Control className={'browse-search-bar'} type="Search Criteria"
                                          placeholder="Search Criteria"/>
                        </FloatingLabel>

                    </div>

                    <div className={``}>
                        <Button className={`button-browse`} md={4} variant="dark" size="md">Search</Button>


                    </div>
                </Form>
            </div>
        </>
    )
}

