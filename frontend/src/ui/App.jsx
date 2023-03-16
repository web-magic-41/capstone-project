import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {Browse} from './Browse'
import {SignIn} from "./SignIn";
import {Navigation} from "./Navigation.jsx";
import {Results} from "./Results.jsx";
import {Message} from "./Message.jsx";
import {ListACard} from "./listACard.jsx";
import {SignUp} from "./SignUp";
import {Profile} from "./Profile";
import {Provider} from "react-redux";
import React from "react";
import {BrowseCard} from "./BrowseCard.jsx";



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
                    <Route path='/browse' element={<Browse />}/>
                    <Route path='/sign-in' element={<SignIn />}/>
                    <Route path='/results' element={<Results/>}/>
                    <Route path='/messages' element={<Message/>}/>
                    <Route path={"listACard"} element={<ListACard/>} />
                    <Route path='/results' element={<Results/>}/>
                    <Route path={"sign-up"} element={<SignUp/>}/>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"browseCard"} element={<BrowseCard/>}/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}