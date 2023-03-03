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
        return<Message[]> await sql
            `SELECT message_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time
           FROM message
         WHERE message_receiving_profile_id
                     IN (${messageProfileIdOne}, ${messageProfileIdTwo})
             AND message_sending_profile_id
                      IN (${messageProfileIdOne}, ${messageProfileIdTwo})`
}

export async function getMessageByMessageId (messageId: string): Promise<Message[]>{
    const result =  await sql <Message[]>`
           SELECT message_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time
           FROM message WHERE message_id = ${messageId}`
    return result?.length===1 ?result[0]: null

}