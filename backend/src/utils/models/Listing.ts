import {sql} from "../database.utils";



export interface Listing {
    listingId: string|null
    listingCardId: string
    listingProfileId:string
    listingBackImg: string
    listingClaimed: boolean | null
    listingDate: string | null
    listingCardDescription: string
    listingCardDesiredValue: bigint
    listingFrontImg:string
}


export async function insertListing (listing: Listing): Promise<string> {
    const { listingCardId,listingProfileId, listingBackImg, listingClaimed, listingDate, listingCardDescription, listingCardDesiredValue, listingFrontImg} = listing
    await sql `INSERT INTO listing ( listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_claimed, listing_date, listing_card_description, listing_card_desired_value, listing_front_img) VALUES(gen_random_uuid(), ${listingCardId}, ${listingProfileId}, ${listingBackImg}, ${listingClaimed}, NOW(), ${listingCardDescription}, ${listingCardDesiredValue}, ${listingFrontImg})`
    return 'Listing created successfully'
}

//double check for line 23
export async function selectAllListings(): Promise<Listing[]> {
    return<Listing[]> await sql`SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_claimed, listing_date, listing_card_description, listing_card_desired_value, listing_front_img FROM listing ORDER BY listing_date DESC`
}


export async function selectListingByListingId (listingId:string): Promise<Listing|null> {
    const result = <Listing[]> await sql `SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_claimed, listing_date, listing_card_description, listing_card_desired_value, listing_front_img FROM listing WHERE listing_id =${listingId}`
    return result?.length === 1 ? result[0] : null
}



export async function selectListingsByListingProfileId (listingProfileId: string): Promise<Listing[]> {
    return <Listing[]> await sql `SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_claimed, listing_date, listing_card_description, listing_card_desired_value, listing_front_img 
FROM listing 
WHERE listing_profile_id = ${listingProfileId}`
}

//export async function postListingController(listing: Listing): Promise<string> {
 //   const {listingId, listingCardId, listingProfileId, listingBackImg, listingCardDescription, listingCardDesiredValue, listingFrontImg} = listing
  //  await sql `INSERT INTO listing(listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_card_description, listing_card_desired_value, listing_front_img) VALUES(${listingId}, ${listingCardId}, ${listingProfileId}, ${listingBackImg}, ${listingCardDescription}, ${listingCardDesiredValue}, ${listingFrontImg})`
 //   return 'Listing Posted'
//}

export async function updateListing(listing: Listing): Promise<string> {
    const {listingId, listingCardId, listingProfileId, listingBackImg, listingClaimed, listingDate, listingCardDescription, listingCardDesiredValue, listingFrontImg} = listing
    await sql `UPDATE listing SET listing_id= ${listingId}, listing_card_id= ${listingCardId}, listing_profile_id=${listingProfileId}, listing_back_img=${listingBackImg}, listing_claimed=${listingClaimed} , listing_date=${listingDate}, listing_card_description=${listingCardDescription}, listing_card_desired_value=${listingCardDesiredValue}, listing_front_img=${listingFrontImg} WHERE listing_profile_id=${listingProfileId}`
    return "Listing updated"
}
export async function deleteListing(listingId: string, profileOwner: string): Promise<string>{
    await sql `DELETE FROM listing WHERE listing_id=${listingId} AND listing_profile_id=${profileOwner}`
    return "Listing deleted"
}
//talk to george or look up: if function can't find error it will throw error or break. Need to fix: verify person who is trying to delete message is actual owner, or else people can delete other's listings, do it in sql query here or in controller.