import {Button, Col, Container, FloatingLabel, Form, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import cat from "./cat.jpg";
import React, {useState} from "react";
import star from "./star.jpg"
import {useDispatch, useSelector} from "react-redux";
import {selectProfile} from "../store/profile.js";
import {fetchCurrentUser} from "../store/currentUser.js";
import {fetchAllListings} from "../store/listings.js";
import {ListingCard} from "./ListingCard.jsx";
import {httpConfig} from "../../utils/http-config.js";

export function Profile() {

    const dispatch = useDispatch()


    const [altProfile, setAltProfile] = useState(null)

    const handleSetAltProfile = (obj) => {
        setAltProfile(obj)
    }
    //set this to first check the url for data before displaying current user.
    let profile = useSelector(state => {
        if(altProfile) return altProfile;
        //if navigating to another profile get that profile id from path
        if (location.pathname.substr(9).length) {
            //if pathname contains a profileId
            let tempProfileId = location.pathname.substr(9);

            httpConfig.get(`/apis/profile/${tempProfileId}`)
                .then(reply => {
                        if (reply.status === 200) {
                            handleSetAltProfile(reply.data)
                        }
                    }
                );
        }


        return state.currentUser ? state.currentUser : null;
    })
    const cards = useSelector(state => state?.donovansCards ? state.donovansCards : {})





    const sideEffects = () => {
        dispatch(fetchCurrentUser())
        dispatch(fetchAllListings())
    }
    const listings = useSelector(state => {
        if (state?.listings.constructor.name === "Object") {
            return Object.values(state.listings).filter(x => {
                return x.listingProfileId === profile?.profileId
            })
        } else return []
    })
    React.useEffect(sideEffects, [dispatch])

    return (
        <>
            <div id={"profile"}>
                <Container>
                    <Row className={"mt-3"}>
                        <Col>
                            {/*<Image src={cat} fluid={true} alt="placeHolder"/>*/}
                            <h2 id={"username"} className={"d-inline ms-2"}>{profile?.profileUsername}</h2>
                        </Col>

                        <Col>
                            <Form>
                                <Form.Group>
                                    <Image className={"ms-2"} id={"star"} src={star} alt={"star1"}/>
                                    <Image id={"star"} src={star} alt={"star1"}/>
                                    <Image id={"star"} src={star} alt={"star1"}/>
                                    <Image id={"star"} src={star} alt={"star1"}/>
                                    <Image id={"star"} src={star} alt={"star1"}/>
                                    <Button className={"ms-1"} id={"button2"} variant="dark" size="md">
                                        Rate User
                                    </Button>


                                    <OverlayTrigger
                                        key={'right'}
                                        placement={'right'}
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Coming Soon
                                            </Tooltip>
                                        }
                                    >
                                        <Button className={"ms-2"} href={"/messages"} id={"button2"} variant="dark"
                                                size="md">
                                            Message
                                        </Button>
                                    </OverlayTrigger>


                                </Form.Group>
                            </Form>
                        </Col>

                        {/*    <Col md={10} className={"justify-content-center mt-3"}>*/}
                        {/*        <Form>*/}
                        {/*            <Form.Group>*/}
                        {/*                <FloatingLabel className={"mb-3"} controlId="floatingInput"*/}
                        {/*                               label="Current Listings">*/}
                        {/*                    <Form.Control type="cardName" placeholder='i.e "Waste Not"'*/}
                        {/*                                  style={{height: '200px'}}/>*/}
                        {/*                </FloatingLabel>*/}
                        {/*            </Form.Group>*/}
                        {/*            <Form.Group>*/}
                        {/*                <FloatingLabel controlId="floatingMarket" label="Looking For">*/}
                        {/*                    <Form.Control type="Market Value" placeholder="$43.22"*/}
                        {/*                                  style={{height: '200px'}}/>*/}
                        {/*                </FloatingLabel>*/}
                        {/*            </Form.Group>*/}
                        {/*        </Form>*/}
                        {/*    </Col>*/}
                        {/*    <Col md={2} className={"mt-3"}>*/}
                        {/*        <Form>*/}
                        {/*            <Form.Group>*/}
                        {/*                <FloatingLabel controlId="Description" label="Rating Comments">*/}
                        {/*                    <Form.Control type="Description" placeholder="blah blah"*/}
                        {/*                                  style={{height: '415px'}}/>*/}
                        {/*                </FloatingLabel>*/}
                        {/*            </Form.Group>*/}
                        {/*        </Form>*/}
                        {/*    </Col>*/}
                    </Row>
                    <div className={'w-100 h-50 d-flex'}>
                        {listings.length > 0 ? listings.map((item) => {
                            return (
                                <div className={'col-md-3 col-10 p-3'}>
                                    <ListingCard profile={profile} card={cards[item.listingCardId]} listing={item}/>
                                </div>
                            )
                        }) : <></>
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}