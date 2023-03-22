import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import profiles from "./profiles.js";
import cards from "./cards.js";
import auth from "./auth.js";
import card from "./card.js";
import currentUser from "./currentUser.js";
import rating from "./rating.js";


const reducer = combineReducers({listings:listings,profiles:profiles, auth:auth, cards:card, donovansCards:cards, currentUser:currentUser, ratings:rating})

//const reducer = combineReducers({listings, profiles, cards, auth:auth})

export const store = configureStore({reducer})