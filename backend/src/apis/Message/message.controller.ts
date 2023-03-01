import {Request, Response, NextFunction} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import {insertMessage, Message, getMessagesByListingIdAndMessageProfileIds} from "../../utils/models/Message";






export async function  getMessagesByListingIdAndMessageProfileIdsController (request: Request, response: Response): Promise<Response<Status>>{
    try{
        const{messageProfileIdOne,messageProfileIdTwo,messageListingId} = request.params
        //write function in model.ts for selectmessages By message profile id
        const data = await getMessagesByListingIdAndMessageProfileIds(messageListingId,messageProfileIdOne,messageProfileIdTwo)
        return response.json({status:200, message:null, data})
    }catch(error) {
        return response.json({
            status:500,
            message: 'YOU SHALL NOT PASS',
            data:[]
        })
    }
}


 //    message_id uuid not null,
//     message_listing_id uuid not null,
//     message_receiving_profile_id uuid not null,
//     message_sending_profile_id uuid not null,
//     message_content varchar(1000) not null,
//     message_date_time

//request is from the user and the response is from computer
export async function postMessage (request: Request, response: Response): Promise<Response<Status>> {
    try {
        //request.body is everything the user is sending
        const{messageContent, messageListingId, messageReceivingProfileId} = request.body
        //as Profile add in if things break
        //figure out receiving profile id
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const messageSendingProfileId: string =profile.profileId as string
        //generated from database
       // const messageId: string = profile.profileId as string

        const message: Message ={
            messageId: null,
            //how to get message listing id/receiving id from the request
            messageListingId,
            messageReceivingProfileId,
            messageSendingProfileId,
            messageContent,
            messageDateTime: null
        }
        const result = await insertMessage(message)
        const status: Status = {
            status:200,
            message: result,
            data:null
        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status:500,
            message: 'Error Creating message try again later.',
            data: null
        })
    }
}
