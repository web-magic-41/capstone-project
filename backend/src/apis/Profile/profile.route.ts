import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import {getPartialProfileByProfileId} from "./profile.controller";


export const ProfileRoute: Router = Router()
ProfileRoute.route('/:profileId')
    .get (
        asyncValidatorController([
            check('profileId', 'please provide a valid profile id').isUUID()
        ])
        , getPartialProfileByProfileId
    )


