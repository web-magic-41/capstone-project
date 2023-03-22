import {createSlice, current} from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";
import {fetchProfileByProfileId} from "./profiles.js";

const ratingSlice = createSlice({
    name:'rating',
    initialState:[],
    reducers: {
        setInitialRatings: (ratings, actionsReducer) => {
            return action.payload
        }
    }
})

export const {setInitialRatings} = ratingSlice.actions


export function getRatingByRatedProfileId(ratedProfileId) {
    return async function (dispatch) {
        const {data} = await httpConfig(`/apis/rating/ratedProfileId/${ratedProfileId}`)
        if(Array.isArray(data) === false) {
            throw new Error('data is malformed')
        }

        const ratingDictionary = data.reduce(
            (accumulator, currentValue) => {
                accumulator[currentValue.ratingProfileId] = currentValue
                return accumulator
            },
            {}
        )
        console.log(ratingDictionary)
        dispatch(setInitialRatings(ratingDictionary))

    }
}

export default ratingSlice.reducer