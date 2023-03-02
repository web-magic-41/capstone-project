import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {messageValidator} from "./message.vaildator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import {
    getMessagesByMessageIdController, getMessagesByMessageProfileIdsController,
    getMessagesByReceivingProfileIdController,
    postMessage
} from "./message.controller";
import {getMessagesByMessageProfileIds} from "../../utils/models/Message";


export const messageRoute=Router()




//are messages tied to listing or just sent to see the messages







messageRoute.route('/')

    .post(isLoggedIn,asyncValidatorController(checkSchema(messageValidator)), postMessage)

messageRoute.route('/messageReceivingProfileId/:messageReceivingProfileId')
    .get(isLoggedIn,asyncValidatorController([check("messageReceivingProfileId","Please provide a valid UUID for message receiving profile id").isUUID()]), getMessagesByReceivingProfileIdController)

messageRoute.route('/messageId')
    .get(isLoggedIn,asyncValidatorController([check("messageId","Please provide a valid UUID for message profile id").isUUID()]), getMessagesByMessageIdController)


messageRoute.route('/messageBetweenUsers/:messageProfileIdOne/:messageProfileIdTwo').get(asyncValidatorController([
   check('messageProfileIdOne', 'please provide a valid messageProfileIdOne').isUUID(),
    check('messageProfileIdTwo', 'please provide a valid messageProfileIdTwo').isUUID()
]),getMessagesByMessageProfileIdsController)






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






//second controller is finding all of the messages that I sent or receive and that the listing id = x
//copy and paste first controller and add listing id basically
//be able to pass in the listing id from the request front end


