import {sql} from "../database.utils";
export interface Message {

    messageId:string|null

    messageReceivingProfileId:string

    messageSendingProfileId:string

    messageContent:string
    //double check date and time
    messageDateTime:string|null
}

export async function insertMessage (message: Message): Promise<string> {
    const {messageSendingProfileId, messageContent, messageReceivingProfileId} = message
    await sql`INSERT INTO message(message_id, message_receiving_profile_id, message_content,
                                  message_sending_profile_id, message_date_time)
              VALUES (gen_random_uuid(), ${messageReceivingProfileId}, ${messageContent},
                      ${messageSendingProfileId}, NOW())`
    return 'Message created successfully'
}


// gets all messages from a given listing between two given users
export async function getMessagesByMessageProfileIds (messageProfileIdOne:string, messageProfileIdTwo:string): Promise<Message[]>{
        return<Message[]> await sql`
           SELECT message_id, message_listing_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time
           FROM message
         WHERE message_receiving_profile_id
                     IN (${messageProfileIdOne}, ${messageProfileIdTwo})
             AND message_sending_profile_id
                      IN (${messageProfileIdOne}, ${messageProfileIdTwo})`
}

//how to view messages the receiver has received
// export async function selectMessagesByReceivingProfileId(profileId: string): Promise<Message[]> {
//         return <Message[]>await sql`
//             SELECT message_id,
//                    message_receiving_profile_id,
//                    message_sending_profile_id,
//                    message_content,
//                    message_date_time
//             FROM message
//             WHERE message_receiving_profile_id = ${profileId}
//             AND  message_sending_profile_id = ${sendingProfileId}`
//
//     }
// export async function selectMessagesByMessageId(messageId: string): Promise<Message[]> {
//     return <Message[]>await sql`
//         SELECT message_id,
//                message_listing_id,
//                message_receiving_profile_id,
//                message_sending_profile_id,
//                message_content,
//                message_date_time
//         FROM message
//         WHERE message_receiving_profile_id = ${messageId}`

//}
//
// getAllMessages = () => {}
// getAllMessagesByProfileId = (daniId) => ()
// getAllMessagesByProfileIds = (daniId, eliseId) => {
//     return <Message[]>await sql`
//             SELECT message_id,
//                    message_receiving_profile_id,
//                    message_sending_profile_id,
//                    message_content,
//                    message_date_time
//             FROM message
//              WHERE message_receiving_profile_id
//                      IN (${eliseId}, ${daniId})
//              AND message_sending_profile_id
//                       IN (${eliseId}, ${daniId})`
// }
//
//
// export async function getAllMessagesByProfileId(profileId: string): Promise<Message[]> {
//     return <Message[]>await sql`
//             SELECT message_id,
//                    message_receiving_profile_id,
//                    message_sending_profile_id,
//                    message_content,
//                    message_date_time
//             FROM message
//             WHERE message_receiving_profile_id = ${profileId}
//             AND  message_sending_profile_id = ${profileId}`
//
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