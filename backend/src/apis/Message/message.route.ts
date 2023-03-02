import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {messageValidator} from "./message.vaildator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import {
    getMessagesByMessageIdController,
    getMessagesByReceivingProfileIdController,
    postMessage
} from "./message.controller";


export const messageRoute=Router()




//are messages tied to listing or just sent to see the messages







messageRoute.route('/')

    .post(isLoggedIn,asyncValidatorController(checkSchema(messageValidator)), postMessage)

messageRoute.route('/messageReceivingProfileId/:messageReceivingProfileId')
    .get(isLoggedIn,asyncValidatorController([check("messageReceivingProfileId","Please provide a valid UUID for message receiving profile id").isUUID()]), getMessagesByReceivingProfileIdController)

messageRoute.route('/messageId')
    .get(isLoggedIn,asyncValidatorController([check("messageId","Please provide a valid UUID for message profile id").isUUID()]), getMessagesByMessageIdController)









//get rid of this
// messageRoute.route('/:messageId').get(asyncValidatorController( [
//    check('messageId', 'please provide a valid messageId').isUUID()
// ]), getMessageByMessageIdController)
//
// messageRoute.route('/messageListingId/:messageListingId').get(asyncValidatorController( [
//    check('messageListingId', 'please provide a valid messageListingId').isUUID()
// ]), getMessageByMessageListingIdController)


//
//first get combining these too routes. Writing a controller that is finding all of the messages that I either sent or receive




//are messages tied to listing or just sent to see the messages
//messageRoute.route('/messageSendingProfileId/:messageSendingProfileId').get(asyncValidatorController([
//    check('messageSendingProfileId', 'please provide a valid messageSendingProfileId').isUUID()
//]),getMessageByMessageSendingIdController)

//second controller is finding all of the messages that I sent or receive and that the listing id = x
//copy and paste first controller and add listing id basically
//be able to pass in the listing id from the request front end


