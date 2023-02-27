export interface Profile {

    messageId:string|null

    messageListingId:string

    messageReceivingProfileId:string

    messageSendingProfileId:string

    messageContent:string
    //double check date and time
    messageDateTime:string
}
export async function insertMessage (message: Message): Promise<string>{
    const{messageListingId, messageReceivingProfileId, messageSendingProfileId, messageContent, messageDateTime}=message
    await sql `INSERT INTO message(message_id, message_listing_id, message_receiving_profile_id, message_sending_profile_id, message_content, message_date_time) VALUES(gen_random_uuid(), ${messageListingId}, ${messageReceivingProfileId}, ${messageSendingProfileId}, ${messageContent}, ${messageDateTime})`
    return'Message created successfully'
}