import React from "react"
import {Button, Image} from "react-bootstrap";

export function Home() {
    return (
        <>
            <section className="home-image">
                <Image src="" alt=""/>
                <p>Insert intro text here</p>
                <Button variant="dark">Login</Button>
                <Button variant="dark">Sign Up</Button>
            </section>
        </>
    )
}

