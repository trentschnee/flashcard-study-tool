import {ADD_DECK,ADD_CARD,DELETE_DECK,DELETE_CARD} from '../actions';
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
}
}