import * as IngredientApiUtil from '../util/ingredient_api_util';

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";

export const receiveIngredients = (ingredients) => ({
    type: RECEIVE_INGREDIENTS,
    ingredients
})

export const fetchIngredients = () => dispatch => IngredientApiUtil.getIngredients()
    .then(ingredients => dispatch(receiveIngredients(ingredients)))