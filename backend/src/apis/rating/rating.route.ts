import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'


const router = Router()
//     Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .post(isLoggedIn, ratingController)
router.route('/ratingProfileId/:ratingProfileId')
    .get(asyncValidatorController([
        check('ratingProfileId', 'please provide a valid ratingProfileId').isUUID()
    ]), getRatingsbyProfileId)
export default router
