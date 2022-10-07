import { combineReducers } from "redux";
import RecipeReducer from "./recipes_reducer";
import IngredientsReducer from "./ingredients_reducer";

const EntitiesReducer = combineReducers({
    recipes: RecipeReducer,
    ingredients: IngredientsReducer
})

export default EntitiesReducer;