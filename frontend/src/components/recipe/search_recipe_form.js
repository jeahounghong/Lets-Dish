import React from 'react'
import './search_recipe_form.scss'

class SearchRecipeForm extends React.Component {


    componentDidMount(){
        this.props.fetchRecipes();
        this.props.fetchIngredients();
    }

    render(){
        return <div className='search-recipe-container'>
            Search Recipes
        </div>
    }
}

export default SearchRecipeForm;