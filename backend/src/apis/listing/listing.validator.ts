import {Schema} from "express-validator";

export const listingValidator: Schema = {
    listingId: {
        isUUID: {
            errorMessage: 'Please provide a valid listingProfileId'
        }
    },
    listingCardId: {
        isUUID: {
            errorMessage: 'Please provide a valid listingCardId'
        }
    },
    listingProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid listingProfileId'
        }
    },
    listingBackImg: {
        isLength: {
            errorMessage: 'ImageURL must be smaller than 255 characters)',
            options: {max: 255}
        },
        trim: true,
        escape: true
    },
    listingClaimed: {
        isBoolean: {
            errorMessage: 'listingClaimed must be true or false',
        }
    },
    listingCardDescription: {
        isLength: {
            errorMessage: 'Description must be less than 500 characters',
        },
        trim: true,
        escape: true
    },
    listingCardDesiredValue: {
        isLength: {
            errorMessage: 'Desired value must be less than 16 characters'
        },
        trim: true,
        escape: true
    },
    listingFrontImg: {
        isLength: {
            errorMessage: 'ImageURL must be smaller than 255 characters)',
            options: {max: 255}
        },
        trim: true,
        escape: true
    }
}