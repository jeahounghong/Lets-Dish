import React from 'react'
import './search_recipe_form.scss'

class SearchRecipeForm extends React.Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.includedIngredient = this.includedIngredient.bind(this);
        this.ingredients = this.ingredients.bind(this);
        this.addedIngredients = this.addedIngredients.bind(this);
        this.toggleIngredient = this.toggleIngredient.bind(this);
        // this.changeAddedIngredient = this.changeAddedIngredient.bind(this)

        this.state = {
            ingredientSearch: "",
            ingredients: []
        }
    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    componentDidMount(){
        this.props.fetchRecipes();
        this.props.fetchIngredients();
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

    // changeAddedIngredient(id, type){
    //     return (e) => {
    //         let ingredients = this.state.ingredients;
    //         ingredients.forEach(ingredient => {
    //             if (ingredient.ingredient === id){
    //                 ingredient[type] = e.currentTarget.value
    //             }
    //         })
    //         this.setState({ingredients: ingredients})
    //     }
    // }

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
                // quantity: 1,
                // unit: "",
                // optional: false
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
        ingredArray = ingredArray.slice(0,9)

        return <ul className="ingredients-list">
            {ingredArray.map(ingredient => 
            <li onClick={() => this.toggleIngredient(ingredient)} className={this.includedIngredient(ingredient._id) ? "picked" : ""}>
                <img src={`${ingredient.imageUrl}`} alt="ingredient-image" className="ingredient-image"/>
                <p>{ingredient.name}</p>
            </li>)}
        </ul>
    }

    addedIngredients(){
        return <div className="included-ingredients">
            {/* <h1>Included Ingredients</h1> */}
            <ul className='added-ingredients'>
                {/* <li className="ingredient-header">
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
                </li> */}
                {this.state.ingredients.map(ingredient => (
                    <li>
                        <div className='added-ingredients-item'
                            style={{backgroundImage: `url(${this.props.ingredients[ingredient.ingredient].imageUrl})`}}>
                            <div className='inner-text'>
                                {this.props.ingredients[ingredient.ingredient].name}
                            </div>
                        </div>
                        {/* <div className="thin-col">
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
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    }


    render(){
        return <div className='search-recipe-container'>
            <form onSubmit={this.handleSubmit}>


                <label className='search-recipe-header'>
                    <p className="recipe-element">Search for recipes using the ingredients you have on hand!</p>
                    <input type="text" name="" 
                        value={this.state.ingredientSearch} 
                        onChange={this.handleInput("ingredientSearch")}
                        placeholder={"Search ingredient here..."}
                        />
                    {this.ingredients()}

                    {this.addedIngredients()}
                    <div className="submit-container">
                        <input type="submit" name="" value="Search Recipe!"/>
                    </div>
                </label>

            </form>
        </div>
    }
}

export default SearchRecipeForm;