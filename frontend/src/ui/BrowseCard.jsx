import {FloatingLabel, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function BrowseCard() {
    return (
        <>
            <div className={`browse-background d-flex align-items-center`}>
                <p className="browsecard-text">Select a card name to create a listing for that card.</p>


                <div className={''}>
                    <FloatingLabel className={'mb-3'} controlId="floatingPassword" label="Search">
                        <Form.Control className={'browse-search-bar'} type="Search Criteria"
                                      placeholder="Search Criteria"/>
                    </FloatingLabel>

                </div>

                <div className={``}>
                    <Button className={`button-browse`} md={4} variant="dark" size="md">Search</Button>
                </div>




            </div>
        </>
    )
}

