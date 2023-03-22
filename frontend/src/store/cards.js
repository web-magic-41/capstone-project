import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";


const cardSlice = createSlice({
    name: 'cards',
    initialState: {},
    reducers: {
        setCard: (cards, action) => {
            cards[action.payload.cardId] = action.payload.data
        }
    }
})


export const {setCard} = cardSlice.actions



export function fetchCardByCardId(cardId) {
    return async function (dispatch, getState) {
        const state = getState()
        const cards = state.cards
        if(cards[cardId] === undefined) {
            const {data} = await httpConfig(`/apis/card/cardId/${cardId}`)
            dispatch(setCard({cardId,data}))
        }
    }
}



export default cardSlice.reducer