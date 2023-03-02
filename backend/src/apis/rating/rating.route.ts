
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import {
    getRatingByRatedProfileId,
    getRatingByRatingsProfileId,
    postRatingController,
    updateRatingController
} from "./rating.controller";
import {listingValidator} from "../listing/listing.validator";
import {updateListingController} from "../listing/listing.controller";
import {ratingValidator} from "./rating.validator";



const ratingRouter = Router()
//     Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
ratingRouter.route('/').post(isLoggedIn, postRatingController)

ratingRouter.route('/ratingByProfile')
    .get(asyncValidatorController([
        check('ratingProfileId', 'please provide a valid ratingProfileId').isUUID()
    ]), getRatingByRatingsProfileId)

ratingRouter.route('/createRating')
    .post(isLoggedIn, postRatingController)

ratingRouter.route('/ratedProfileId')
    .get(asyncValidatorController([
        check('ratedProfileId', 'please provide a valid ratedProfileId').isUUID()
    ]), getRatingByRatedProfileId)

ratingRouter.route('/updateRating')
    .post(isLoggedIn, asyncValidatorController(checkSchema(
        (ratingValidator))), updateRatingController)
export default ratingRouter

