import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signInController} from "./sign-in.controller";
import { signInValidator } from "./sign-in.validator";
import {Router} from "express";

export const SignInRouter: Router = Router()

SignInRouter.route('/signIn')
.post(asyncValidatorController(checkSchema(signInValidator)), signInController)