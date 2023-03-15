import {httpConfig} from "../componets/HttpConfig.js";
import {Formik} from "formik";
import {Form} from "react-bootstrap";


export const CreateListingForm = () => {
    const listing = {
        listingContent: "",
    };

    const dispatch - useDispatch()

    const auth = useSelector(state => state.auth ? state.auth: null);

    const validator = Yup.object().shape({
        listingContent: Yup.string(
            .required("Listing content is required"),
    });

        const submitListing = (values, {resetForm, setStatus}) => {
            const listingProfileId = auth?.profileId ?? null
            const listing = {listingProfileId, ...values}
            httpConfig.post("/apis/listing/", listing)
                .then(reply => {
                    let {message, type} = reply

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
                initialValues={listing}
                onSubmit={submitListing}
                validationSchema={validator}
                >
                {ListingFormContent}
            </Formik>
        )
};

function ListingFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlue,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
        <Form className={"mb-3"} onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="tweetContent">
                <Form.Label></Form.Label>
            </Form.Group>

        </Form>
        </>
    )
}