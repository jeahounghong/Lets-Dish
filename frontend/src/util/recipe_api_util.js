import axios from 'axios';

export const createRecipe = (data) => (
    axios.post('/api/recipes', data)
)

export const getRecipes = () => (
    axios.get('/api/recipes')
)

export const searchRecipes = (ingredients) => (
    axios.get('/api/recipes/search', ingredients)
)