import {Response, Request} from "express";
import {generateJwt, validatePassword } from "../../utils/interfaces/auth.utils";
import { Profile, selectProfileByProfileEmail } from "../../utils/models/Profile";
import { v4 as uuid } from 'uuid'
export async function signinController (request: Request, response: Response): Promise<Response> {
    try {
        const {profileEmail, profilePassword} = request.body
        const profile: Profile | null = await selectProfileByProfileEmail(profileEmail)

        return (profile !== null) && await validatePassword(profile.profileHash, profilePassword)
            ? signInSuccessful(request, response, profile)
            : signInFailed(response)
    } catch (error:any) {
        return response.json({ status: 500, data: null, message: error.message })
}
}

function signInFailed (response: Response): Response {
    return response.json({ status:400, message: 'Email or password is incorrect please try again.', data: null })
}

function signInSuccessful (request: Request, response: Response, profile:Profile): Response{
    const { profileId, profileUsername, profileEmail, profilePhoneNumber} = profile
    const signature: string = uuid()
    const authorization: string = generateJwt({
        profileId,
        profileUsername,
        profileEmail,
        profilePhoneNumber
    }, signature)

    // @ts-ignore
    request.session.profile = profile
    // @ts-ignore
    request.session.jwt = authorization
    // @ts-ignore
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({ status: 200, message: 'Sign in successful', data: null})
}