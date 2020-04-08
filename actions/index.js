// Define our actions for redux..

export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const GETALL_DECKS = "GETALL_DECKS"
// Function addDeck takes in deck for argument
export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}
// Function ADD_CARD will add the card to the deck
export function addCard(deckTitle, card){
    return{
        type:ADD_CARD,
        deckTitle,
        card
    }
}
// Function DELETE_DECK will delete the specified deck
export function deleteDeck(deck){
    return {
        type: DELETE_DECK,
        deck
    }

}
// Function getAllDecks will return all decks
export function getAllDecks(decks){
    return {
        type: GETALL_DECKS,
        decks
    }
}