import {Status} from "../../utils/interfaces/Status";
import { NextFunction, Request, Response } from 'express'
import {
    getRatingByRatingId,
    insertRating,
    Rating,
    selectRatingByRatedProfileId,
    selectRatingsByRatingProfileId, updateRating

} from '../../utils/models/Rating'
import {Profile} from "../../utils/models/Profile";
import {getMessageByMessageId} from "../../utils/models/Message";


export async function getRatingByRatedProfileId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {ratedProfileId} = request.params
        const data = await selectRatingByRatedProfileId(ratedProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: "Couldn't retrieve rating try again later",
            data: []
        })
    }
}

export async function getRatingByRatingsProfileId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {ratingProfileId} = request.params
        const data = await selectRatingsByRatingProfileId(ratingProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: "Couldn't retrieve rating try again later",
            data: []
        })
    }
}

export async function postRatingController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {ratingComment, ratingStarValue, ratedProfileId}= request.body
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const ratingProfileId: string = profile.profileId as string

        const rating: Rating = {
            ratingProfileId,
            ratedProfileId,
            ratingComment,
            ratingStarValue
        }
        const result = await insertRating(rating)

        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating rating please try again later',
            data: null
        })
    }
}

export async function updateRatingController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const {ratingProfileId, ratedProfileId, ratingComment, ratingStarValue} = request.body
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const profileIdFromSession: string = profile.profileId as string
        let status: Status = {
            status: 400,
            data: null,
            message: 'You are not allowed to perform this action'
        }
        if (profileIdFromSession === ratingProfileId) {


            const rating: Rating = {
                ratingProfileId,
                ratedProfileId,
                ratingComment,
                ratingStarValue
            }
            const sqlResults = await updateRating(rating)
            const status: Status = {
                status: 200,
                data: null,
                message: sqlResults
            }
            return response.json(status)
        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status: 500,
            message: 'Error updating rating, please try again later',
            data: null
        })
    }
}

export async function getRatingsByRatingIdController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        // @ts-ignore
        const {ratingId}= request.params
        const data = await getRatingByRatingId(ratingId)
        return response.json({status:200, message:null, data})
    } catch(error) {
        return response.json({
            status:500,
            message: 'Could not select rating',
            data: []
        })
    }
}