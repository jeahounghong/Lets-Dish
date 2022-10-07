import React from 'react';
import './css-reset.css'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';

import MainPage from './main/main_page';

const App = () => (
    <div>    
        <NavbarContainer/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;