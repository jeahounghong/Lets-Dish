import { RECEIVE_RECIPE, RECEIVE_RECIPES } from "../actions/recipe_actions";

const RecipesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_RECIPE:
            nextState[action.recipe._id] = action.recipe;
            return nextState;
        case RECEIVE_RECIPES:
            action.recipes.data.forEach(recipe => {
                nextState[recipe._id] = recipe
            })
            return nextState;
        default:
            return state;
    }
}

export default RecipesReducer;