import {fetchAllListings} from "../../../store/listings.js";

export const browseForm = () => {

    const listings = useSelector(state => state.listings? state.listings : []);

    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllListings());
    };
    useEffect(effects, [dispatch]);

    return (
        <>
            <Container>
                <Button onClick={()=> {

                    dispatch(fetchAllListings())}}>Click Me</Button>
                <Row className='pt-2 border border-light border-2'>
                    <Col>
                        <TweetForm/>
                    </Col>
                </Row>
                //comeback and add listing card
                {listings.map(listing => <>
                    <span>listing.name
                </span></>)}
            </Container>
        </>
    )
};
