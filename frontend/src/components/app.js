import React from 'react';
import './css-reset.css'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RecipeFormContainer from './recipe/recipe_form_container';
import SearchRecipeFormContainer from './recipe/search_recipe_form_container';
import GlobeContainer from './globe/globe_container';

import MainPage from './main/main_page';

const App = () => (
    <div>    
        <NavbarContainer/>
        <Route path="/" component={GlobeContainer}/>
        <Route exact path="/recipe" component={SearchRecipeFormContainer}/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/new_recipe" component={RecipeFormContainer}/>
        </Switch>
    </div>
);

export default App;