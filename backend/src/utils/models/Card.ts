import {sql} from "../database.utils";

export interface Card {
    // needs to be the same as in sql file
    cardId: string
    cardName: string
    cardDescription: string
    cardMarketValue: string
}

export async function insertCard (card: Card): Promise<string> {
    const {cardId, cardName, cardDescription, cardMarketValue} = card
    await sql `
        INSERT INTO card (card_id, card_name, card_description, card_market_value) 
        VALUES(${cardId}, ${cardName}, ${cardDescription}, ${cardMarketValue})`
    return "Card created"
}

export async function selectCardByCardId (cardId: string): Promise<Card[]> {
    return <Card[]> await sql  `SELECT (card_id, card_description,card_market_value, card_name) FROM card WHERE card_id = ${cardId}`

}