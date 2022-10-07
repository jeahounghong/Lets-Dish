import * as RecipeApiUtil from '../util/recipe_api_util'

export const RECEIVE_RECIPE  = "RECEIVE_RECIPE";

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const createRecipe = (recipe) => dispatch => RecipeApiUtil.createRecipe(recipe)
    .then(recipe => dispatch(receiveRecipe(recipe)))