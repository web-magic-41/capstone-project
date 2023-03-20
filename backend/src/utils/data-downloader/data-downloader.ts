import axios from "axios";
import {Card, insertCard} from "../models/Card";

async function DataDownloader(){
    async function main(){
        await downloadCards()
    }
return main()

    async function downloadCards() {
        try{
            const {data:bulkData} = await axios("https://api.scryfall.com/bulk-data")
          const oracleCardDownloadURI=bulkData.data.find((data: any) => data.name ===  'Oracle Cards')['download_uri']

const {data:cardsData}= await axios(oracleCardDownloadURI)

            for (let i = 0; i<cardsData.length; i++){

                let cardData = cardsData[i]
console.log(i)
                if (cardData ['image_uris']=== undefined){
                    continue
                }
                if (cardData['set_name']=== 'Amonkhet'){

                }
                const cardName = cardData['name']
                const cardScryFallURI = cardData['scryfall_uri']
                const cardImageURL = cardData ['image_uris'].normal
                let cardPrice
                let cardDescription

                if (cardData['foil']=== true){
                    cardPrice = cardData['prices']['usd_foil'] ?? 'unavailable'
                } else{
                    cardPrice = cardData['prices'].usd ?? 'unavailable'
                }
                if (cardData['oracle_text'] === undefined){
                    cardDescription=cardsData['flavor_text'] ?? null
                }else {
                    cardDescription = `${cardData['oracle_text']}
                    ${cardData['flavor_text']}`
                }
const card:Card = {cardId:null, cardName, cardPrice, cardDescription, cardImageURL, cardScryFallURI}
                if (i ===435){
                    console.log(card)
                }
                await insertCard(card)

            }
        }
        catch (e) {
            console.error(e)

        }
    }
}
DataDownloader().catch(error =>{console.error(error)})