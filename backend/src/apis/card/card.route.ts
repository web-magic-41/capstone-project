import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import {getCardByCardId, getCardByCardName, postCardController} from "./card.controller";


const router = Router()
//     Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/makeCard')
    .post(isLoggedIn, postCardController)



router.route('/cardId/:cardId')
    .get(asyncValidatorController([
        check('cardId', 'please provide a valid cardId').isUUID()
    ]), getCardByCardId)

router.route('/cardName')
    .post(getCardByCardName)

export default router
/*
* Make card
* View/Get a card
*
* */