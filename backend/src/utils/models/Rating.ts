import {sql} from "../database.utils";

export interface Rating {
    ratingProfileId: string
    ratedProfileId: string
    ratingComment: string
    ratingStarValue: string
}

export async function insertRating (rating: Rating): Promise<string> {
    // rating is an OBJECT (data type); lines 12-15 are the same as line 16
    // const ratingProfileId = rating.ratingProfileId
    // const ratedProfileId = rating.ratedProfileId
    // const ratingComment = rating.ratingComment
    // const ratingStarValue = rating.ratingStarValue
    const {ratingProfileId, ratedProfileId, ratingComment, ratingStarValue} = rating
    await sql `INSERT INTO rating (rating_profile_id, rated_profile_id, rating_comment, rating_star_value) VALUES(${ratingProfileId}, ${ratedProfileId}, ${ratingComment}, ${ratingStarValue}`
    return "Rating created"
}

export async function updateRatingStarValue (rating: Rating): Promise<string> {

    const {ratingStarValue} = rating
    await sql `UPDATE rating SET ratingStarValue= ${ratingStarValue} WHERE ProfileId=${ProfileId}}`
    return "Rating star value updated"
}

export async function updateRatingComment (rating: Rating): Promise<string> {
    const {ratingProfileId, ratedProfileId} = rating
    await sql`UPDATE rating SET ratingComment= ${ratingComment} WHERE ProfileId = ${ProfileId}}`
    return "Rating comment updated"
}