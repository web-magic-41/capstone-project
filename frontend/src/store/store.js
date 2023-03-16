import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
<<<<<<< HEAD
import profiles from "./profiles.js";
import cards from "./cards.js";

const reducer = combineReducers({listings, profiles, cards})
=======
import auth from "./auth.js";

const reducer = combineReducers({listings:listings, auth:auth})
>>>>>>> develop


export const store = configureStore({reducer})