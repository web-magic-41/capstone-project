import {Schema} from 'express-validator'


export const cardValidator: Schema = {
    cardId: {
        isUUID: {
            errorMessage: 'Please provide a valid cardId'
        }
    },
    cardDescription: {
        isLength: {
            errorMessage: 'Card description can be no longer than 1000 characters',
            options: {max: 1000}
        }
    },cardMarketValue: {
        isInt: {
            errorMessage: 'Market value can only be of type Integer'
        }
    },
    cardName: {
        isLength: {
            errorMessage: 'listing name can only be 32 characters',
            options: {max: 32}
        }
    }

}