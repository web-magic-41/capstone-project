import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {ListACard} from "./listACard.jsx";
import {Navigation} from "./Navigation.jsx";
import {Results} from "./Results.jsx";
import {SignUp} from "./SignUp";
import {Profile} from "./Profile";
import {Provider} from "react-redux";
import React from "react";


export function App({store}) {
    return (

        <>

            <Provider store={store}>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route path='/Home' element={<Home/>}/>
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={"listACard"} element={<ListACard/>} />
                    <Route path='/results' element={<Results/>}/>
                    <Route path={"sign-up"} element={<SignUp/>}/>
                    <Route path={"Profile"} element={<Profile/>}/>

                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}