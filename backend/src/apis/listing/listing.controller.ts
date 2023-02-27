import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import {Response,Request, NextFunction} from "express";
import {
    insertListing,
    selectAllListings,
    selectListingByListingId,

}


export async function getAllListingsController(request: Request, response: Response): Promise<e.Response<any, Record<string, any>>> {
    try {
        const data = await selectAllListings()

        const status: Status = { status:200, message: null, data}
        return response.json(status)
    } catch(error) {
        return response.json({
            status:500,
        message: '',
        data: []
        })
    }
}


export async function getListingsByProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try{
        const {listingProfileId} = request.params
        const data = await selectListingsByProfileId(listingProfileId)
        return response.json({status:200, message:null, data})
    } catch(error) {
        return response.json({
            status:500,
            message: '',
            data: []
        })
    }
}


export async function getListingByListingIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {listingId} = response.params
        const data = await selectListingByListingId(listingId)
        return response.json({status: 200, message: null, data})
    } catch(error){
        return response.json({
            status:500,
            message: '',
            data:null
        })
    }
}


export async function postListing (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {listingContent} = request.body
        const profile:profile = request.session.profile as Profile
        const listingProfileId: string = profile.profileId as string

        const listing: Listing = {
       listingId: null,
            listingDescription,
            listingMarketValue,
            listingName
        }
        const result = await insertListing(listing)
        const status: Status = {
            status:200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        return response.json({
            status:500,
            message: 'Error Pulling listing Data',
            data: null
        })
    }
    }