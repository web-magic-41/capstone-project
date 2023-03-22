
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import {
    getRatingByRatedProfileId,
    getRatingByRatingsProfileId, getRatingsByRatingIdController,
    postRatingController,
    updateRatingController
} from "./rating.controller";
import {listingValidator} from "../listing/listing.validator";
import {updateListingController} from "../listing/listing.controller";
import {ratingValidator} from "./rating.validator";



const ratingRouter = Router()
//     Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
ratingRouter.route('/').post(isLoggedIn, postRatingController)


ratingRouter.route('/ratingProfileId/:ratingProfileId')

    .get(asyncValidatorController([
        check('ratingProfileId', 'please provide a valid ratingProfileId').isUUID()
    ]), getRatingByRatingsProfileId)

ratingRouter.route('/')
    .post(isLoggedIn, postRatingController)

ratingRouter.route('/ratedProfileId/:ratedProfileId')
    .get(asyncValidatorController([
        check('ratedProfileId', 'please provide a valid ratedProfileId').isUUID()
    ]), getRatingByRatedProfileId)

ratingRouter.route('/:ratingProfileId')
    .put(isLoggedIn, asyncValidatorController(checkSchema(
        (ratingValidator))), updateRatingController)
    .get(asyncValidatorController(checkSchema(
        (ratingValidator))), getRatingsByRatingIdController)
export default ratingRouter

