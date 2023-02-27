import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";

const router =Router()
router.route('/:messageId').get(asyncValidatorController( [
    check('messageId', 'please provide a valid messageId').isUUID()
]), getMessageByMessageIdController)

router.route('/messageListingId').get(asyncValidatorController( [
    check('messageListingId', 'please provide a valid messageListingId').isUUID()
]), getMessageByMessageListingIdController)

router.route('/messageReceivingProfileId').get(asyncValidatorController([
    check('messageReceivingProfileId', 'please provide a valid messageReceivingProfileId').isUUID()
]),getMessageByMessageRecevingIdController)

router.route('/messageSendingProfileId').get(asyncValidatorController([
    check('messageSendingProfileId', 'please provide a valid messageSendingProfileId').isUUID()
]),getMessageByMessageSendingIdController)

router.route('/messageContent').get(asyncValidatorController([
    check('messageContent', 'please message content').isUUID()
]),getMessageByMessageContentIdController)

router.route('/messageDateTime').get(asyncValidatorController([
    check('messageDateTime', 'please provide valid date and time').isUUID()
]),getMessageByMessageDateTimeIdController)




router.route('')



