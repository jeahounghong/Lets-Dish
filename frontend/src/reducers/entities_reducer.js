import { combineReducers } from "redux";
import RecipesReducer from "./recipes_reducer";
import IngredientsReducer from "./ingredients_reducer";
import CountriesReducer from "./countries_reducer";

const EntitiesReducer = combineReducers({
    recipes: RecipesReducer,
    ingredients: IngredientsReducer,
    countries: CountriesReducer
})

export default EntitiesReducer;