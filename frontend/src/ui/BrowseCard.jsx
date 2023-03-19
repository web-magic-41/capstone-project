import {FloatingLabel, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "./componets/HttpConfig.js";
import {setCards} from "../store/card.js";
import * as Yup from "yup"
import {useState} from "react";



export function BrowseCard() {


    const [cardList, setCardList] = useState([]);
    const handleCardList = (arr) => {
        setCardList(arr)
    }

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
                        } else {
                            handleCardList(reply.data);
                        }

                    }
                    setStatus({message, type});
                }
            );
    };


    return (<>
        <div className={`pt-5 d-flex flex-column align-items-center justify-content-start browse-background`}>
            <Formik
                initialValues={card}
                onSubmit={getCards}
                validationSchema={validator}
            >
                {BrowseCardForm}

            </Formik>

            <div className={`d-flex mt-5 justify-content-around`}>
            {cardList.length > 0 ? cardList.map((card) => {

                //remove this temp code when scryfall data is populated
                if (card.cardName === "Demonic Tutor") {
                    card.cardImageUrl = 'https://cards.scryfall.io/normal/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728'
                }

                return (
                    <div className={`col-md-3 col-12 d-flex justify-content-center`}>
                    <a className={`d-flex justify-content-around`} href={`${document.location.host}/ListACard/${card.cardId}`}>
                        <img className={`w-75`} src={card.cardImageUrl} alt={`Image of the Magic card: ${card.cardName}`}/>
                    </a>
                    </div>
                )
            }):<> </>
            }
            </div>
        </div>
        </>
)

}

function BrowseCardForm(props) {
    //console.log("test")
    //console.log(cardList)
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
        <div className={`browseCardSearchContainer`}>

            <p className="browsecard-text">Select a card name to create a listing for that card.</p>
            <Form onSubmit={handleSubmit}>

                <div className={''}>

                    <FloatingLabel className={'mb-3'} controlId="cardName" label="Search">
                        <Form.Control className={'browse-search-bar'} onChange={handleChange} onBlur={handleBlur}
                                      name={"cardName"} value={values.cardName} type="search"
                                      placeholder="Search Criteria"/>
                    </FloatingLabel>

                </div>

                <div className={``}>
                    <Button className={`button-browse`} type={"submit"} md={4} variant="dark"
                            size="md">Search</Button>
                </div>
            </Form>
        </div>
    )
}

