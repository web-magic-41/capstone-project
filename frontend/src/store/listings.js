import {httpConfig} from "../../utils/http-config.js";
import { createSlice } from '@reduxjs/toolkit'

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
    }
}


export default listingSlice.reducer