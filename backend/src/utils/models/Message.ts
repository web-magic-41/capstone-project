import {sql} from "../database.utils";
import {Listing} from "./Listing";
export interface Message {

    messageId:string|null

    messageListingId:string

    messageReceivingProfileId:string

    messageSendingProfileId:string

    messageContent:string
    //double check date and time
    messageDateTime:string|null
}

export async function insertMessage (message: Message): Promise<string> {
    const {messageSendingProfileId, messageContent, messageReceivingProfileId, messageListingId} = message
    await sql`INSERT INTO message(message_id, message_listing_id, message_receiving_profile_id, message_content,
                                  message_sending_profile_id, message_date_time)
              VALUES (gen_random_uuid(), ${messageListingId}, ${messageReceivingProfileId}, ${messageContent},
                      ${messageSendingProfileId}, NOW())`
    return 'Message created successfully'
}
export async function getMessagesByProfileId(profileId: string): Promise<Message[]> {
        return <Message[]>await sql`
            SELECT message_id,
                   message_listing_id,
                   message_receiving_profile_id,
                   message_sending_profile_id,
                   message_content,
                   message_date_time
            FROM message
            WHERE message_reciving_profile_id = ${profileId}
               OR message_sending_profile_id = ${profileId}`
    }

//gets all messages from a given listing between two given users
//export async function getMessagesByListingIdAndMessageProfileIds (messageListingId: string, messageProfileIdOne:string, messageProfileIdTwo:string): Promise<Message[]>{
//    return<Message[]> await sql`
//            SELECT message_id, message_listing_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time
//            FROM message
//            WHERE message_listing_id = ${messageListingId}
//              AND message_receiving_profile_id
//                      IN (${messageProfileIdOne}, ${messageProfileIdTwo})
//              AND message_sending_profile_id
//                       IN (${messageProfileIdOne}, ${messageProfileIdTwo})`
// }

// export async function updateMessage (message: Message): Promise<string> {
//     const { messageId,
//         messageListingId,
//         messageReceivingProfileId,
//         messageSendingProfileId,
//         messageContent,
//        messageDateTime} = message
//     await sql `UPDATE listing SET message_id= ${messageId}, message_listing_id= ${messageListingId}, //message_receiving_profile_id=${messageReceivingProfileId}, message_sending_profile_id=${messageSendingProfileId}, message_content=${messageContent} , //message_date_time=${messageDateTime},
//               WHERE message_sending_profile_id=${messageSendingProfileId}`
//    return "Message updated"