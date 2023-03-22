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


const listingRouter = Router()
listingRouter.route('/getListingByListingId').get(asyncValidatorController([
    check('listingId', 'please provide a valid listingId').isUUID()
]), getListingByListingIdController)



listingRouter.route('/getListingByProfileId').get(asyncValidatorController([
    check('listingProfileId', 'Please provide a valid listingProfileId').isUUID()]), getListingsByProfileIdController)



listingRouter.route('/')
    .get(getAllListingsController)
    .post(isLoggedIn,asyncValidatorController(checkSchema((listingValidator))), postListingController)

listingRouter.route('/updateListing')
    .post(isLoggedIn, asyncValidatorController(checkSchema(
        (listingValidator))), updateListingController)

listingRouter.route('/deleteListing')
    .delete(isLoggedIn, asyncValidatorController(checkSchema(
        (listingValidator))), deleteListingController)


export default listingRouter