import React from "react";
import "./recipe_form.scss"

class RecipeForm extends React.Component {
    
    constructor(props){
        super(props)
        this.ingredients = this.ingredients.bind(this)
    }

    componentDidMount(){
        this.props.fetchIngredients();
    }

    ingredients(){
        const ingredArray = Object.values(this.props.ingredients);
        return <ul className="ingredients-list">
            {ingredArray.map(ingredient => <li>
                <img src={`${ingredient.imageUrl}`} alt="ingredient-image" className="ingredient-image"/>
                <p>{ingredient.name}</p>
            </li>)}
        </ul>
    }
    
    render(){
        return (<div className="recipe-form-container">
            Recipe Form
            <form>
                <label>
                    <p>Name of Recipe</p>
                    <input type="text" name="name" value=""/>
                </label>
                {this.ingredients()}
            </form>
        </div>)
    }
}

export default RecipeForm;