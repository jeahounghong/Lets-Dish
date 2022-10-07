import axios from 'axios';

export const createRecipe = (data) => (
    axios.post('/api/recipes', data)
)