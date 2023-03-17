import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import auth from "./auth.js";
import card from "./card.js";
import currentUser from "./currentUser.js";

const reducer = combineReducers({listings:listings, auth:auth, cards:card, currentUser:currentUser})


export const store = configureStore({reducer})