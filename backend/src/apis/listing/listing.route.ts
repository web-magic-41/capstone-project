import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {
    deleteListingController,
    getAllListingsController,
    getListingByListingIdController, getListingsByProfileIdController, postListingController, updateListingController
} from "./listing.controller";
import {check, checkSchema} from "express-validator";
import {listingValidator} from "./listing.validator";
import {Router} from "express";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";


const router = Router()
router.route('/getListingByListingId').get(asyncValidatorController([
    check('listingId', 'please provide a valid listingId').isUUID()
]), getListingByListingIdController)


router.route('/getListingByProfileId').get(asyncValidatorController([
    check('listingProfileId', 'Please provide a valid listingProfileId').isUUID()]), getListingsByProfileIdController)



router.route('/post')
    .get(getAllListingsController)
    .post(isLoggedIn,asyncValidatorController(checkSchema((listingValidator))), postListingController)

router.route('/updateListing')
    .post(isLoggedIn, asyncValidatorController(checkSchema(
        (listingValidator))), updateListingController)

router.route('/deleteListing')
    .delete(isLoggedIn, asyncValidatorController(checkSchema(
        (listingValidator))), deleteListingController)


export default router