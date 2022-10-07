import { RECEIVE_INGREDIENTS } from "../actions/ingredient_actions";

const IngredientsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_INGREDIENTS:
            action.ingredients.forEach(ingredient => {
                nextState[ingredient._id] = ingredient
            })
            return nextState;
        default:
            return state;
    }
}

export default IngredientsReducer;