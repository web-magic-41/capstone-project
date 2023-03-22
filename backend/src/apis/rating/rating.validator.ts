import {Schema} from "express-validator";

export const ratingValidator: Schema = {
    ratingProfileId:{
        isUUID:{
            errorMessage: 'Please provide a valid ratingProfileId'
        }
    },
    ratedProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid ratedProfileId'
        }
    },
    ratingComment: {
        isLength: {
            errorMessage: 'A comment cannot be longer than 1000 characters',
            options: { max: 1000}
        },
        trim: true,
        escape: true
    },
    ratingStarValue: {
        isInt: {
            errorMessage: 'A rating must be a number between 1 and 5',
            options: {min:1, max:5}
        }
    }
}