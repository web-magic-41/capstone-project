import listings from "./listings.js";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import auth from "./auth.js";

const reducer = combineReducers({listings:listings, auth:auth})


export const store = configureStore({reducer})