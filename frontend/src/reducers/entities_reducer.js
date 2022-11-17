import { combineReducers } from "redux";
import RecipesReducer from "./recipes_reducer";
import IngredientsReducer from "./ingredients_reducer";
import CountriesReducer from "./countries_reducer";
import SearchRecipesReducer from "./search_recipes_reducer"

const EntitiesReducer = combineReducers({
    recipes: RecipesReducer,
    ingredients: IngredientsReducer,
    countries: CountriesReducer,
    searchRecipes: SearchRecipesReducer
})

export default EntitiesReducer;