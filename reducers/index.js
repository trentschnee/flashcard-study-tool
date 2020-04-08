import {ADD_DECK,ADD_CARD,DELETE_DECK,DELETE_CARD,GETALL_DECKS} from '../actions';
//decks reducer
function decks(state={},action){
switch(action.type){
    case ADD_DECK:
        return {
            ...state,
            [action.deck]:{
                title: action.deck,
                questions:[]
            }
        }
    case DELETE_DECK:
        const {deck} = action;
        return Object.keys(state).reduce((newState, testedDeck) => {
            if (testedDeck !== deck) {
              return {
                ...newState,
                [testedDeck]: state[testedDeck]
              };
            }
            return newState;
          }, {});
    case ADD_CARD:
        const { deckTitle, card } = action;
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: state[deckTitle].questions.concat(card)
        }
      }
    case GETALL_DECKS:{
        return {
            ...state,
            ...action.decks
        }
    }
    default:
        return state;
}
}
export default decks;