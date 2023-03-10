import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {
    getAllListingsController,
    getListingByListingIdController,
    getListingsByProfileIdController, postListing
} from "./listing.controller";
import {check, checkSchema} from "express-validator";
import {listingValidator} from "./listing.validator";
import {Router} from "express";

const router = Router()
router.route('/:listingId').get(asyncValidatorController([
    check('listingId', 'please provide a valid listingId').isUUID()
]), getListingByListingIdController)


router.route('/listingProfileId/:listingProfileId').get(asyncValidatorController([
    check('listingProfileId', 'Please provide a valid listingProfileId').isUUID()
]), getListingsByProfileIdController)



router.route('/')
    .get(getAllListingsController)
    .post(isLoggedIn,asyncValidatorController(checkSchema((listingValidator))), postListing)



export default router