
import {Router} from "express";
import {signupProfileController} from "./sign-up.controller";
import {asyncValidatorController} from "../utils/controllers/async-validator.controller";
import {signupValidator} from "./sign-up/signup.validator";
import {checkSchema} from "express-validator";

export const signupRoute: Router = Router()

signupRoute.route('/')
.post(
    asyncValidatorController(checkSchema(signupValidator)),
    signupProfileController
)