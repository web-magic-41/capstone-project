import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import profiles from "./profiles.js";
import cards from "./cards.js";

const reducer = combineReducers({listings, profiles, cards})


export const store = configureStore({reducer})