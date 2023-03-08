import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour'
import {Home} from "./Home.jsx";
import {ListACard} from "./listACard.jsx";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={"listACard"} element={<ListACard/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}