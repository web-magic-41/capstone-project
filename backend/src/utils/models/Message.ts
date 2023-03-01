import {sql} from "../database.utils";
export interface Message {

    messageId:string|null

    messageListingId:string

    messageReceivingProfileId:string

    messageSendingProfileId:string

    messageContent:string
    //double check date and time
    messageDateTime:string|null
}

export async function insertMessage (message: Message): Promise<string>{
    const{messageSendingProfileId,messageContent,messageReceivingProfileId,messageListingId}=message
    await sql `INSERT INTO message(message_id, message_listing_id, message_receiving_profile_id, message_content, message_sending_profile_id,message_data_time)
VALUES(gen_random_uuid(), ${messageListingId}, ${messageReceivingProfileId}, ${messageContent}, ${messageSendingProfileId}, NOW())`
    return'Message created successfully'
}
//gets all messages from a given listing between two given users
export async function getMessagesByListingIdAndMessageProfileIds (messageListingId: string, messageProfileIdOne:string, messageProfileIdTwo:string): Promise<Message[]>{
    return<Message[]> await sql`
            SELECT message_id, message_listing_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time
            FROM message 
            WHERE message_listing_id = ${messageListingId} 
              AND message_reciving_profile_id 
                      IN (${messageProfileIdOne}, ${messageProfileIdTwo}) 
              AND message_sending_profile_id 
                       IN (${messageProfileIdOne}, ${messageProfileIdTwo})`
}