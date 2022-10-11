import {connect} from 'react-redux';
import RecipeForm from './recipe_form';
import {fetchIngredients} from '../../actions/ingredient_actions'
import { fetchCountries } from '../../actions/country_actions';
import { createRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state) => ({
    ingredients: state.entities.ingredients,
    countries: state.entities.countries
})

const mapDispatchToProps = (dispatch) => ({
    fetchIngredients: () => dispatch(fetchIngredients()),
    fetchCountries: () => dispatch(fetchCountries()),
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)