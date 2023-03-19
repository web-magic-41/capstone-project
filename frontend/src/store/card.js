import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";

const cardSlice = createSlice({
    name: "cards",
    initialState: [],
    reducers: {
        setCards: (cards, action) => {
            console.log(cards)
            return action.payload
        }
    }
})
console.log("actions", cardSlice)

export const {setCards} = cardSlice.actions

export const fetchCards = (cardName) => async (dispatch) => {
    const {data} =  await httpConfig.post("/apis/cardName/", cardName)
    dispatch(setCards(data));
};

export default cardSlice.reducer
