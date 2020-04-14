// Utilities for backfilling the calendar.

import { AsyncStorage } from 'react-native'

export const FLASHCARDS_FLASHCARD_DB = 'flashcards:flashcard'

export function getDecks(){
    return AsyncStorage.getItem(FLASHCARDS_FLASHCARD_DB).then((decks)=>{
        return(JSON.parse(decks))

    })
}
export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(FLASHCARDS_FLASHCARD_DB,JSON.stringify({
        [title]:{title,questions:[]}
    }))
}
export function deleteDeckTitle(title){
    return AsyncStorage.getItem(FLASHCARDS_FLASHCARD_DB).then((results)=>{
        const decks = JSON.parse(results);
        const newDeck = Object.keys(decks).reduce((newState, testedDeck) => {
            if (testedDeck !== title) {
              return {
                ...newState,
                [testedDeck]: decks[testedDeck]
              };
            }
            return newState;
          }, {});
          AsyncStorage.setItem(FLASHCARDS_FLASHCARD_DB, JSON.stringify(newDeck));

    })
}
export function saveDeckCard(title, question) {
    return AsyncStorage.getItem(FLASHCARDS_FLASHCARD_DB).then(results => {
      const data = JSON.parse(results);
      Object.keys(data).map(dTitle => {
        if (dTitle === title) {
          data[dTitle].questions.push(question);
        }
      });
      AsyncStorage.setItem(FLASHCARDS_FLASHCARD_DB, JSON.stringify(data));
    });
  }