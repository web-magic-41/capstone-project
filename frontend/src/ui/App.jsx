import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {Browse} from './Browse'
import {SignIn} from "./SignIn";
import {Navigation} from "./Navigation.jsx";
import {Results} from "./Results.jsx";

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
                </Routes>
            </BrowserRouter>
        </>
    )
}