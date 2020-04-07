// Define our actions for redux..

export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const DELETE_CARD = "DELETE_DECK";
// Function addDeck takes in deck for argument
export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}