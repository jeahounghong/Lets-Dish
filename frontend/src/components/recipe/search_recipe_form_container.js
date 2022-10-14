import {connect} from 'react-redux';
import SearchRecipeForm from './search_recipe_form';
import { fetchRecipes } from '../../actions/recipe_actions';
import {fetchIngredients} from '../../actions/ingredient_actions';

const mapStateToProps = state => ({
    recipes: state.entities.recipes,
    ingredients: state.entities.ingredients
})

const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    fetchIngredients: () => dispatch(fetchIngredients())
})

const SearchRecipeFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchRecipeForm);
export default SearchRecipeFormContainer;