import {Status} from "../../utils/interfaces/Status";
import { NextFunction, Request, Response } from 'express'
import {selectRatingByRatingProfileId, selectRatingbyRatingProfileId} from '../../utils/models/Rating'

export async function getRatingByProfileId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {ratingProfileId} = request.params
        const data = await selectRatingByRatingProfileId()yRatingProfileId(ratingProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: "Couldn't retrieve rating try again later",
            data: []
        })
    }
}