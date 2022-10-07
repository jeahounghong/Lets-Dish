import {connect} from 'react-redux';
import RecipeForm from './recipe_form';
import {fetchIngredients} from '../../actions/ingredient_actions'

const mapStateToProps = (state) => ({
    ingredients: state.entities.ingredients
})

const mapDispatchToProps = (dispatch) => ({
    fetchIngredients: () => dispatch(fetchIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)