import axios from 'axios';

export const createRecipe = (data) => (
    axios.post('/api/recipes', data)
)

export const getRecipes = () => (
    axios.get('/api/recipes')
)

export const searchRecipes = (ingredients) => { 
    console.log("ingredients")
    console.log(ingredients)
    return axios.get('/api/recipes/search', {
        params:{
            ingredients: ingredients
        }})
}