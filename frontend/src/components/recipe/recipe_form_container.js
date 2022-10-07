import {connect} from 'react-redux';
import RecipeForm from './recipe_form';
import {fetchIngredients} from '../../actions/ingredient_actions'
import { fetchCountries } from '../../actions/country_actions';

const mapStateToProps = (state) => ({
    ingredients: state.entities.ingredients,
    countries: state.entities.countries
})

const mapDispatchToProps = (dispatch) => ({
    fetchIngredients: () => dispatch(fetchIngredients()),
    fetchCountries: () => dispatch(fetchCountries())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)