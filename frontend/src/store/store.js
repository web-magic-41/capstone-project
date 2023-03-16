import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import profiles from "./profiles.js";
import cards from "./cards.js";
import auth from "./auth.js";


const reducer = combineReducers({listings, profiles, cards, auth:auth})



export const store = configureStore({reducer})