import {NextFunction} from "express";

export async function getAllMessagesController(request:Request, response: Response): Promise<Response<Status>>{
    try {
        const data = await selectAllMessages()
        const status: Status = { status:200, message: null, data}
        return response.json(status)
    }catch (error) {
        return repsone.json({
            status: 500,
            message:'',
            data:[]
        })
    }
}

export async function  getMessagesByProfileIdController (request: Request, response: Response, nextFunction:NextFunction): Promise<Response<Status>>{
    try{
        const{messageProfileId} = request.params
        const data = await selectMessagesByMessageProfileId(messageProfileId)
        return response.json({status:200, message:null, data})
    }catch(error) {
        return response.json({
            status:500,
            message: '',
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


export async function postMessage (request: Request, response: Response): Promise<Status>> {
    try{
        const{messageListingId,messageReceivingProfileId,messageSendingProfileId,messageContent,messagedatetime} = request.body
        const profile:Profile = request.session.profile as Profile
        //ask
        const messageId: string =
    }
}
