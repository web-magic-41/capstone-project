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
    },
    cardImageURL: {
        isURL: {
            errorMessage: 'Needs to be a URL',
        },
        isLength: {
            errorMessage: 'ImageURL too long',
            options: {max: 128}

        }
    },
    cardName: {
        isLength: {
            errorMessage: 'listing name can be up to 32 characters',
            options: {max: 32}
        }
    }

}