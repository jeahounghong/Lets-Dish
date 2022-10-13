import React from 'react';
import './css-reset.css'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import RecipeFormContainer from './recipe/recipe_form_container';
import GlobeContainer from './globe/globe_container';

import MainPage from './main/main_page';

const App = () => (
    <div>    
        <NavbarContainer/>
        <Route exact path="/" component={GlobeContainer}/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute exact path="/new_recipe" component={RecipeFormContainer}/>
        </Switch>
    </div>
);

export default App;