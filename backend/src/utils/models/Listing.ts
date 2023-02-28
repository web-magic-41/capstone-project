import {sql} from "../database.utils";


export interface Listing {
    listingId: string|null
    listingCardId: string
    listingProfileId:string
    listingBackImg: string
    listingCardDescription: string
    listingCardDesiredValue: bigint
    listingFrontImg:string
}


export async function insertListing (listing: Listing): Promise<string> {
    const { listingCardId,listingProfileId, listingBackImg, listingCardDescription, listingCardDesiredValue, listingFrontImg} = listing
    await sql `INSERT INTO listing ( listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_card_description, listing_card_desired_value, listing_front_img) VALUES(gen_random_uuid(), ${listingCardId}, ${listingProfileId}, ${listingBackImg}, ${listingCardDescription}, ${listingCardDesiredValue}, ${listingFrontImg})`
    return 'Listing created successfully'
}

//double check for line 23
export async function selectAllListings(): Promise<Listing[]> {
    return<Listing[]> await sql`SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_card_description, listing_card_desired_value, listing_front_img FROM listing ORDER BY listing_date DESC`
}


export async function selectListingByListingId (listingId:string): Promise<Listing|null> {
    const result = <Listing[]> await sql `SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_card_description, listing_card_desired_value, listing_front_img FROM listing WHERE listing_id =${listingId}`
    return result?.length === 1 ? result[0] : null
}



export async function selectListingsByListingProfileId (listingProfileId: string): Promise<Listing[]> {
    return <Listing[]> await sql `SELECT listing_id, listing_card_id, listing_profile_id, listing_back_img, listing_card_description, listing_card_desired_value, listing_front_img FROM listing WHERE listing_profile_id = ${listingProfileId}`
}