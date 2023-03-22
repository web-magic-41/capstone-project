import {Response,Request} from "express";
import {Profile, selectPartialProfileByProfileId} from "../../utils/models/Profile";
import {PartialProfile} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";


// export async function putProfileController (request: Request, response: Response): Promise<Response> {
//     try {
//         const {profileId} = request.params
//         const {profileEmail,profileUsername,profilePhone } = request.body
//         const profile = request.session.profile as Profile
//         const profileIdFromSession = profile.profileId as string
//
//
//         const preformUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
//             const previousProfile: Profile = await selectProfileBy
//         }
//     }
// }



export async function getPartialProfileByProfileId (request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params
        const sqlResult = await selectPartialProfileByProfileId(profileId)
        const data = sqlResult ?? null
        const status:Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: null}))
    }
}