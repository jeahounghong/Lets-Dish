import * as RecipeApiUtil from '../util/recipe_api_util'

export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_SEARCH_RECIPES = "RECEIVE_SEARCH_RECIPES";

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes
})

export const receiveSearchRecipes = (recipes) => ({
    type: RECEIVE_SEARCH_RECIPES,
    recipes
})

export const createRecipe = (recipe) => dispatch => RecipeApiUtil.createRecipe(recipe)
    .then(recipe => dispatch(receiveRecipe(recipe)))

export const fetchRecipes = () => dispatch => RecipeApiUtil.getRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)))

export const searchRecipes = (ingredients) => dispatch => RecipeApiUtil.searchRecipes(ingredients)
    .then(recipes => dispatch(recipes))