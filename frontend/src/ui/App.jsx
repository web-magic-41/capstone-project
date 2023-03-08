import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {ListACard} from "./listACard.jsx";
import {Navigation} from "./Navigation.jsx";
import {Results} from "./Results.jsx";
import {SignUp} from "./SignUp";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route path='/Home' element={<Home/>}/>
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={"listACard"} element={<ListACard/>} />
                    <Route path='/results' element={<Results/>}/>
                    <Route path={"sign-up"} element={<SignUp/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}