import { RECEIVE_COUNTRIES } from "../actions/country_actions";

const CountriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_COUNTRIES:
            action.countries.data.forEach(country => {
                nextState[country._id] = country
            })
            return nextState;
        default:
            return state;
    }
}

export default CountriesReducer