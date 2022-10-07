import axios from 'axios';

export const getIngredients = () => (
    axios.get('/api/ingredients')
)