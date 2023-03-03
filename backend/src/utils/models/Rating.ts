import {sql} from "../database.utils";
import {Message} from "./Message";

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
    await sql `
        INSERT INTO rating (rating_profile_id, rated_profile_id, rating_comment, rating_star_value) 
        VALUES(${ratingProfileId}, ${ratedProfileId}, ${ratingComment}, ${ratingStarValue})`
    return "Rating created"
}
// updates the rating
export async function updateRating (rating: Rating): Promise<string> {
    const {ratingStarValue,ratedProfileId, ratingProfileId, ratingComment} = rating
    await sql `UPDATE rating SET rating_star_value= ${ratingStarValue}, rating_comment= ${ratingComment} WHERE rating_profile_id=${ratingProfileId} and rated_profile_id= ${ratedProfileId}`
    return "Rating star value updated"
}
// Get the rating by the profile that is being rated
export async function selectRatingByRatedProfileId (ratedProfileId: string): Promise<Rating[]> {
    const result = await sql <Rating[]>`SELECT rated_profile_id, rating_profile_id, rating_comment, rating_star_value FROM rating WHERE rated_profile_id = ${ratedProfileId}`
    return result
}
export async function selectRatingsByRatingProfileId(ratingProfileId: string): Promise<Rating[]> {
    const result = await sql <Rating[]>`SELECT rating_profile_id, rated_profile_id, rating_comment, rating_star_value FROM rating WHERE rating_profile_id = ${ratingProfileId}`
    return result
}

export async function getRatingByRatingId (ratingId: string): Promise<Message[]>{
    const result =  await sql <Message[]>`
           SELECT rating_profile_id, rated_profile_id, rating_comment, rating_star_value
           FROM rating WHERE rating_id = ${ratingId}`
    return result?.length===1 ?result[0]: null

}