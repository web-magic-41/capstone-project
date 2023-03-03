import { Schema } from "express-validator";

export const messageValidator: Schema = {

    messageContent: {
        isLength: {
            errorMessage:'a message cannot be longer than 1000 characters',
            options: {max:1000}
        },
        trim:true,
        escape:true
    },
    messageReceivingProfileId:{
        isUUID: {
            errorMessage: 'please provide a valid messageReceivingProfileId'
        }},
    messageSendingProfileId:{
        isUUID: {
            errorMessage: 'please provide a valid messageSendingProfileId'
        }}


    }

