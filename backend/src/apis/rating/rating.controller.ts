import {Status} from "../../utils/interfaces/Status";

export async function getRatingbyProfileId (request:Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {ratingProfileId} = request.params
        const data = await selectRatingbyRatingProfileId(ratingProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status 500,
            message: "Couldn't retrieve rating try again later"
            data: []
        })
    }
}