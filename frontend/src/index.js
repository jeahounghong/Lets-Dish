
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import {fetchIngredients} from './actions/ingredient_actions'
import {searchRecipes} from './actions/recipe_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  window.searchRecipes = searchRecipes;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  window.store = store;
  window.fetchIngredients = fetchIngredients;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});