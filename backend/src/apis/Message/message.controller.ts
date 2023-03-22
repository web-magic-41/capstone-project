import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";
import {
    getMessageByMessageId,
    getMessagesByMessageProfileIds,
    insertMessage,
    Message,
} from "../../utils/models/Message";


//request is from the user and the response is from computer
export async function postMessage (request: Request, response: Response): Promise<Response<Status>> {
    try {

        console.log("MEOW")

        //request.body is everything the user is sending
        const{messageContent, messageReceivingProfileId} = request.body
        //as Profile add in if things break
        //figure out receiving profile id
        // @ts-ignore
        const profile: Profile = request.session.profile as Profile
        const messageSendingProfileId: string =profile.profileId as string
        //generated from database
       // const messageId: string = profile.profileId as string

        const message: Message ={
            messageId: null,
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



export async function getMessagesByMessageIdController(request: Request, response: Response): Promise<Response<Status>> {
    try{
        // @ts-ignore
        const {messageId}= request.params
        const data = await getMessageByMessageId(messageId)
        return response.json({status:200, message:null, data})
    } catch(error) {
        return response.json({
            status:500,
            message: 'Could not select message',
            data: []
        })
    }
}

export async function  getMessagesByMessageProfileIdsController (request: Request, response: Response): Promise<Response<Status>>{
    try{
        const{messageProfileIdOne,messageProfileIdTwo} = request.params
        //write function in model.ts for selectmessages By message profile id
        const data = await getMessagesByMessageProfileIds(messageProfileIdOne,messageProfileIdTwo)
        return response.json({status:200, message:null, data})
    }catch(error) {
        return response.json({
            status:500,
            message: 'YOU SHALL NOT PASS',
            data:[]
        })
    }
}

