import {Status} from "../../utils/interfaces/Status";
import { NextFunction, Request, Response } from 'express'
import {insertCard, selectCardByCardId} from "../../utils/models/Card";

export async function postCardController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {cardId, cardDescription, cardName, cardMarketValue}= request.body
        // @ts-ignore

        const card: Card = {
            cardId,
            cardDescription,
            cardName,
            cardMarketValue

        }
        const result = await insertCard(card)

        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating card please try again later',
            data: null
        })
    }
}

export async function getCardByCardId (request:Request, response: Response,): Promise<Response<Status>> {
    try {
        const {cardId} = request.params
        const data = await selectCardByCardId(cardId)
        console.log(data)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: "Couldn't retrieve card try again later",
            data: []
        })
    }
}
