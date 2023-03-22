import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../utils/http-config.js";


const profileSlice = createSlice({
    name: 'profiles',
    initialState: {},
    reducers: {
        setProfile: (profiles, action) => {
            profiles[action.payload.profileId] = action.payload.data
        }
    }
})


export const {setProfile} = profileSlice.actions



export function fetchProfileByProfileId(profileId) {
    return async function (dispatch, getState) {
        const state = getState()
        const profiles = state.profiles
        if(profiles[profileId] === undefined) {
            const {data} = await httpConfig(`/apis/profile/${profileId}`)
            dispatch(setProfile({profileId,data}))
        }
    }
}



export default profileSlice.reducer