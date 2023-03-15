import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        setInitialProfile: (profile, action) => {
            return action.payload
        }
    }
})


export const {setInitialProfile} = profileSlice.actions

console.log("actions", profileSlice)


export function selectProfile() {
    return async function (dispatch) {
        const {data} = await httpConfig('/utils/models/Profile')
        if(Array.isArray(data) === false) {
            throw new Error('data is malformed')
        }
        const profileDictionary = data.reduce(
            (accumulator, currentValue) => {
                accumulator[currentValue.profileId] = currentValue
                return accumulator
            },
            {}
        )
        console.log(profileDictionary)
        dispatch(setInitialProfile(profileDictionary))
    }
}



export default profileSlice.reducer