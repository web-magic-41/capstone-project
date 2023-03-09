import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {Browse} from './Browse'
import {SignIn} from "./SignIn";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/browse' element={<Browse />}/>
                    <Route path='/signin' element={<SignIn />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}