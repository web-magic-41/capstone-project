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



export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route path='/Home' element={<Home/>}/>
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/browse' element={<Browse />}/>
                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/results' element={<Results/>}/>
                    <Route path='/message' element={<Message/>}/>
                    <Route path={"listACard"} element={<ListACard/>} />
                    <Route path='/results' element={<Results/>}/>
                    <Route path={"sign-up"} element={<SignUp/>}/>
                    <Route path={"Profile"} element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}