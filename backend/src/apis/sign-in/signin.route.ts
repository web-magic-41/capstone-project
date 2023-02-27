import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signinController} from "./signin.controller";
import { signinValidator } from "./signin.validator";
import {Router} from "express";

export const signinRoute: Router = Router()

signinRoute.route('/')
.post(asyncValidatorController(checkSchema(signinValidator)), signinController)