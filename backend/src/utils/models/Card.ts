import {sql} from "../database.utils";

export interface Card {
    // needs to be the same as in sql file
    cardId: string
    cardName: string
    cardDescription: string
    cardImageURL: string
    cardTcgPlayerId: string
}

export async function insertCard (card: Card): Promise<string> {
    const { cardName, cardDescription, cardImageURL, cardTcgPlayerId} = card

    await sql `
        INSERT INTO card (card_id, card_name, card_image_URL, card_description, card_tcg_player_id ) 
        VALUES(gen_random_uuid(), ${cardName}, ${cardImageURL}, ${cardDescription}, ${cardTcgPlayerId})`
    return "Card created"
}

export async function selectCardByCardId (cardId: string): Promise<Card|null> {
    const result = <Card[]> await sql  `SELECT * FROM card WHERE card_id = ${cardId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectCardByCardName (cardName: string): Promise<Card[]> {
    cardName = '%' + cardName + '%'
    return <Card[]> await sql `SELECT * FROM card WHERE LOWER(card_name) LIKE LOWER(${cardName})`

}