import {httpConfig} from "../../utils/http-config.js";
import { createSlice } from '@reduxjs/toolkit'
import {fetchProfileByProfileId} from "./profiles.js";
import {fetchCardByCardId} from "./cards.js";

const listingSlice = createSlice ({
    name: 'listings',
    initialState: [],
    reducers: {
        setInitialListings: (listings, action) => {
            return action.payload
        }
    }
})


export const {setInitialListings} = listingSlice.actions

console.log("actions", listingSlice)

export function fetchAllListings() {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/listing/')
        if(Array.isArray(data) === false) {
            throw new  Error('data is malformed')
        }

        const listingDictionary = data.reduce(
            (accumulator, currentValue) => {
                accumulator[currentValue.listingId] = currentValue
                return accumulator
            },
            {}
        )

        console.log(listingDictionary)
        dispatch(setInitialListings(listingDictionary))



        let profileIdSet = new Set
        for(let listing of data) {
            const {listingProfileId} = listing
            if (profileIdSet.has(listingProfileId) === false) {
                profileIdSet.add (listingProfileId)
                dispatch(fetchProfileByProfileId(listingProfileId))
            }
        }

        let cardIdSet = new Set
        for(let listing of data) {
            const {listingCardId} = listing
            if (cardIdSet.has(listingCardId) === false) {
                cardIdSet.add (listingCardId)
                dispatch(fetchCardByCardId(listingCardId))
            }
        }
    }
}


export default listingSlice.reducer