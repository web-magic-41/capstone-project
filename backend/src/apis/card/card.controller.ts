import {Status} from "../../utils/interfaces/Status";
import { NextFunction, Request, Response } from 'express'
import {insertCard} from "../../utils/models/Card";

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
        console.log('test')
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