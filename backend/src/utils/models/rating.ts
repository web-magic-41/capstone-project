import {sql} from "../database.utils";

export interface Rating {
    ratingProfileId: string
    ratedProfile: string
    ratingComment: string
    ratingStarValue: string
}

export async function insertRating (rating: Rating): Promise<string> {
    const {ratingProfileId, ratedProfileId} = rating
    await sql `INSERT INTO "rating" (rating_profile_id, rated_profile_id, rating_comment, rating_star_value) VALUES(${ratingProfileId}, $(ratedProfileId}, NOW())`
    return "Rating created"
}

export async function updateRatingStarValue (rating: Rating): Promsie<string> {
    const {ratingProfileId, ratedProfileId} = rating
    await sql `UPDATE rating SET ratingStarValue= ${ratingStarValue} WHERE ProfileId=${ProfileId}}`
    return "Rating star value updated"
}

export async function updateRatingComment (rating: Rating): Promsie<string> {
    const {ratingProfileId, ratedProfileId} = rating
    await sql`UPDATE rating SET ratingComment= ${ratingComment} WHERE ProfileId = ${ProfileId}}`
    return "Rating comment updated"
}