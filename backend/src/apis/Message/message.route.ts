import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {messageValidator} from "./message.vaildator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import {
    getMessagesByMessageIdController, getMessagesByMessageProfileIdsController,
    postMessage
} from "./message.controller";


export const messageRoute=Router()




//are messages tied to listing or just sent to see the messages







messageRoute.route('/')

    .post(isLoggedIn,asyncValidatorController(checkSchema(messageValidator)), postMessage)

messageRoute.route('/:messageId')
    .get(isLoggedIn,asyncValidatorController([check("messageId","Please provide a valid UUID for message profile id").isUUID()]), getMessagesByMessageIdController)


messageRoute.route('/messageBetweenUsers/:messageProfileIdOne/:messageProfileIdTwo').get(asyncValidatorController([
   check('messageProfileIdOne', 'please provide a valid messageProfileIdOne').isUUID(),
    check('messageProfileIdTwo', 'please provide a valid messageProfileIdTwo').isUUID()
]),getMessagesByMessageProfileIdsController)






