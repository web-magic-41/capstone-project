
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import {
    getRatingByRatedProfileId,
    getRatingByRatingsProfileId,
    postRatingController,
    updateRatingController
} from "./rating.controller";



const router = Router()
//     Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/donthitthis').post(isLoggedIn, postRatingController)

router.route('/ratingProfileId/:ratingProfileId')
    .get(asyncValidatorController([
        check('ratingProfileId', 'please provide a valid ratingProfileId').isUUID()
    ]), getRatingByRatingsProfileId)

router.route('/createRating')
    .post(isLoggedIn, postRatingController)

router.route('/ratedProfileId/:ratedProfileId')
    .get(asyncValidatorController([
        check('ratedProfileId', 'please provide a valid ratedProfileId').isUUID()
    ]), getRatingByRatedProfileId)


export default router

