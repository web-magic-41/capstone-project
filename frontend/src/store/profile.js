import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";
import {fetchAuth} from "./auth.js";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        setInitialProfile: (profile, action) => {
            return action.payload
        },
        getCurrentUserByProfileId: (profile, action) => {
            return action.payload
        }
    }
})



export const {getCurrentUserByProfileId} = profileSlice.actions

export default profileSlice.reducer

export const fetchCurrentUser = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        dispatch(getCurrentUserByProfileId(data))
    }
}






















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



//export profileSlice.reducer