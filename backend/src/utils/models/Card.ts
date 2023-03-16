import {sql} from "../database.utils";

export interface Card {
    // needs to be the same as in sql file
    cardId: string
    cardName: string
    cardDescription: string
    cardMarketValue: string
}

export async function insertCard (card: Card): Promise<string> {
    const { cardName, cardDescription, cardMarketValue} = card
    await sql `
        INSERT INTO card (card_id, card_name, card_description, card_market_value) 
        VALUES(gen_random_uuid(), ${cardName}, ${cardDescription}, ${cardMarketValue})`
    return "Card created"
}

<<<<<<< HEAD
export async function selectCardByCardId (cardId: string): Promise<Card|null> {
    const result = <Card[]> await sql  `SELECT card_id, card_description,card_market_value, card_name FROM card WHERE card_id = ${cardId}`
    return result?.length === 1 ? result[0] : null
=======
export async function selectCardByCardId (cardId: string): Promise<Card[]> {
    return <Card[]> await sql  `SELECT (card_id, card_description,card_market_value, card_name) FROM card WHERE card_id = ${cardId}`

}

export async function selectCardByCardName (cardName: string): Promise<Card[]> {
    return <Card[]> await sql `SELECT * FROM card WHERE card_name = ${cardName}`
>>>>>>> develop
}