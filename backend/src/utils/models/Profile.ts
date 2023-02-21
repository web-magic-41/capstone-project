import {sql} from "../database.utils";

export interface Profile {
    profileId: string|null
    profileActivationToken: string
    profileEmail: string
    profileHash: string
    profilePhoneNumber: string
    profileUsername: string

}

/** Function to insert profile object into postgres database
* @param profile Profile object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
**/
 export async function insertProfile (profile: Profile): Promise<string>{
     console.log(profile)
    const {profileActivationToken, profileEmail, profileHash, profilePhoneNumber, profileUsername}=profile
    await sql `INSERT INTO profile(profile_id, profile_activation_token, profile_email, profile_hash, profile_phone_number, profile_username) VALUES (gen_random_uuid(), ${profileActivationToken}, ${profileEmail}, ${profileHash}, ${profilePhoneNumber}, ${profileUsername})`
    return 'Profile successfully created'}