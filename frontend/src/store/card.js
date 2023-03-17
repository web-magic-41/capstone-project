import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";

const slice = createSlice({
    name: "cards",
    initialState: [],
    reducers: {
        setCards: (cards, action) => {
            console.log(cards)
            return action.payload
        }
    }
})

export const {setCards} = slice.actions

export const fetchCards = (cardName) => async (dispatch) => {
    const {data} =  await httpConfig.post("/apis/cardName/", cardName)
    dispatch(setCards(data));


};

export default slice.reducer
