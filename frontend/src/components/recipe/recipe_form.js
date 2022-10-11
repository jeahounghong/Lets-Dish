import React from "react";
import "./recipe_form.scss"

class RecipeForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: "",
            country: null,
            ingredients: [],
            ingredientSearch: "",
            recipeUrl: "",
            description: ""
        }
        this.ingredients = this.ingredients.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.toggleIngredient = this.toggleIngredient.bind(this);
        this.addedIngredients = this.addedIngredients.bind(this);
        this.includedIngredient = this.includedIngredient.bind(this);
        this.changeAddedIngredient = this.changeAddedIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    includedIngredient(ingredientId){
        let included = false;
        this.state.ingredients.forEach(ingredient => {
            if (ingredient.ingredient === ingredientId){
                included = true
            }
        })
        return included
    }


    // This function returns the first 8 ingredients that match the search query
    ingredients(){
        var ingredArray = Object.values(this.props.ingredients);
        ingredArray = ingredArray.filter(ingredient => (
            ingredient.name.toLowerCase().indexOf(this.state.ingredientSearch.toLowerCase()) >= 0
        ))
        ingredArray = ingredArray.slice(0,8)

        return <ul className="ingredients-list">
            {ingredArray.map(ingredient => 
            <li onClick={() => this.toggleIngredient(ingredient)} className={this.includedIngredient(ingredient._id) ? "picked" : ""}>
                <img src={`${ingredient.imageUrl}`} alt="ingredient-image" className="ingredient-image"/>
                <p>{ingredient.name}</p>
            </li>)}
        </ul>
    }

    changeAddedIngredient(id, type){
        return (e) => {
            let ingredients = this.state.ingredients;
            ingredients.forEach(ingredient => {
                if (ingredient.ingredient === id){
                    ingredient[type] = e.currentTarget.value
                }
            })
            this.setState({ingredients: ingredients})
        }
    }

    addedIngredients(){
        return <div className="included-ingredients">
            {/* <h1>Included Ingredients</h1> */}
            <ul>
                <li className="ingredient-header">
                    <div className="wide-col">
                        Ingredient
                    </div>
                    <div className="thin-col">
                        Quantity
                    </div>
                    <div className="thin-col">
                        Unit
                    </div>
                    <div className="thin-col">
                        Optional
                    </div>
                </li>
                {this.state.ingredients.map(ingredient => (
                    <li className="included-ingredient-list-item">
                        <div className="wide-col">
                            {this.props.ingredients[ingredient.ingredient].name}
                        </div>
                        <div className="thin-col">
                            <input type="number" name="" value={ingredient.quantity} 
                                onChange={this.changeAddedIngredient(ingredient.ingredient, "quantity")}/>
                        </div>
                        <div className="thin-col">
                            <input type="text" name="" value={ingredient.unit}
                                onChange={this.changeAddedIngredient(ingredient.ingredient, "unit")}/>
                        </div>
                        <div className="thin-col">
                            <select value={ingredient.optional} 
                                onChange={this.changeAddedIngredient(ingredient.ingredient, "optional")}>
                                <option value="true" >Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    }

    handleSubmit(e){
        e.preventDefault();
        let recipe = this.state;
        delete recipe.ingredientSearch
        console.log(recipe);
        this.props.createRecipe(recipe)
        // debugger;
    }
    
    render(){
        return (<div className="recipe-form-container">
            <h1 className="recipe-form-title">Create a New Recipe!</h1>
            <form onSubmit={this.handleSubmit}>
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
                <label>
                    <p className="recipe-element">Description</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleInput("description")}/>
                </label>
                <label>
                    <p className="recipe-element">Recipe Link</p>
                    <input type="text" name="recipe-link" value={this.state.recipeUrl} onChange={this.handleInput("recipeUrl")}/>
                </label>
                <div className="submit-container">
                    <input type="submit" name="" value="Create Recipe!"/>
                </div>
            </form>
        </div>)
    }
}

export default RecipeForm;