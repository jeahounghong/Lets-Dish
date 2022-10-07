import React from "react";
import "./recipe_form.scss"

class RecipeForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: "",
            country: null,
            ingredients: [],
            ingredientSearch: ""
        }
        this.ingredients = this.ingredients.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.toggleIngredient = this.toggleIngredient.bind(this);
        this.addedIngredients = this.addedIngredients.bind(this);
    }

    componentDidMount(){
        this.props.fetchIngredients();
        this.props.fetchCountries();
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    toggleIngredient(ingredient){
        console.log("toggle ingredients")
        let newIngredients = []
        this.state.ingredients.forEach(includedIng => {
            if (includedIng.ingredient !== ingredient._id){
                newIngredients.push(includedIng)
            }
        })
        if (this.state.ingredients.length === newIngredients.length){
            let newIngred = {
                ingredient: ingredient._id,
                quantity: 1,
                unit: "",
                optional: false
            }
            newIngredients.push(newIngred);
            this.setState({ingredients: newIngredients})
        } else {
            this.setState({ingredients: newIngredients})
        }
    }

    ingredients(){
        var ingredArray = Object.values(this.props.ingredients);
        ingredArray = ingredArray.filter(ingredient => (
            ingredient.name.toLowerCase().indexOf(this.state.ingredientSearch.toLowerCase()) >= 0
        ))
        ingredArray = ingredArray.slice(0,8)

        return <ul className="ingredients-list">
            {ingredArray.map(ingredient => <li onClick={() => this.toggleIngredient(ingredient)}>
                <img src={`${ingredient.imageUrl}`} alt="ingredient-image" className="ingredient-image"/>
                <p>{ingredient.name}</p>
            </li>)}
        </ul>
    }

    addedIngredients(){
        return <div>
            <h1>Included Ingredients</h1>
            <ul>
                {this.state.ingredients.map(ingredient => (
                    <li><div>
                        {this.props.ingredients[ingredient.ingredient].name}
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    }
    
    render(){
        return (<div className="recipe-form-container">
            <h1 className="recipe-form-title">Recipe Form</h1>
            <form>
                <label>
                    <p className="recipe-element">Name of Recipe</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput("name")}/>
                </label>
                <label>
                    <p className="recipe-element">Country of Origin</p>
                    <select value={this.state.country} onChange={this.handleInput("country")}>
                        <option value="" selected disabled hidden>Choose a country</option>
                        {Object.values(this.props.countries).map(country => 
                            <option value={country._id}>
                                {country.name}
                            </option>
                        )}
                    </select>
                </label>
                <label>
                    <p className="recipe-element">Ingredients</p>
                    <input type="text" name="" value={this.state.ingredientSearch} onChange={this.handleInput("ingredientSearch")}/>
                    {this.ingredients()}
                    {this.addedIngredients()}
                </label>
            </form>
        </div>)
    }
}

export default RecipeForm;