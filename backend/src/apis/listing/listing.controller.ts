import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import {Response,Request, NextFunction} from "express";
import {
    insertListing, Listing,
    selectAllListings,
    selectListingByListingId, selectListingsByListingProfileId, deleteListing, updateListing

} from "../../utils/models/Listing";


export async function getAllListingsController(request: Request, response: Response):Promise<Response<Status>>
{
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


export async function getListingsByProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const {listingProfileId} = request.params
        const data = await selectListingsByListingProfileId(listingProfileId)
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
        const {listingId} = request.params
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

//go over this again....
export async function postListingController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {listingCardId,listingBackImg, listingCardDescription, listingCardDesiredValue,listingFrontImg} = request.body
        // @ts-ignore
        const profile:Profile = request.session.profile as Profile
        const listingProfileId: string = profile.profileId as string

        const listing: Listing = {
            listingCardId,
            listingProfileId,
            listingBackImg,
            listingCardDescription,
            listingCardDesiredValue,
            listingFrontImg
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
export async function updateListingController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const {listingId, listingCardId, listingProfileId, listingBackImg, listingClaimed, listingDate, listingCardDescription, listingCardDesiredValue, listingFrontImg} = request.body
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const profileIdFromSession: string = profile.profileId as string
            let status : Status = {
                status: 400,
                data: null,
                message: 'You are not allowed to perform this action.'
        }
        if (profileIdFromSession === listingProfileId) {

            const listing: Listing = {
                listingId,
                listingCardId,
                listingProfileId,
                listingBackImg,
                listingClaimed,
                listingDate,
                listingCardDescription,
                listingCardDesiredValue,
                listingFrontImg
            }
            const sqlResults = await updateListing(listing)
             status = {
                status: 200,
                data: null,
                message: sqlResults

            }
        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status: 500,
            message: 'Error updating listing, please try again later',
            data: null
        })
    }
}

export async function deleteListingController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const {listingId} = request.params
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const profileOwner: string = profile.profileId as string


        const sqlResults = await deleteListing(listingId, profileOwner)
        const status : Status = {
            status: 200,
            data: null,
            message: sqlResults

        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status: 500,
            message: 'Error deleting listing, please try again later',
            data: null
        })
    }
}
