import React from 'react'
import './search_recipe_form.scss'

class SearchRecipeForm extends React.Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
    }

    componentDidMount(){
        this.props.fetchRecipes();
        this.props.fetchIngredients();
    }



    render(){
        return <div className='search-recipe-container'>
            Search Recipes
            <form onSubmit={this.handleSubmit}>


                <div className="submit-container">
                    <input type="submit" name="" value="Search Recipe!"/>
                </div>
            </form>
        </div>
    }
}

export default SearchRecipeForm;