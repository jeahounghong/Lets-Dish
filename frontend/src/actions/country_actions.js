import * as CountryApiUtil from '../util/country_api_util';

export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";

export const receiveCountries = (countries) => ({
    type: RECEIVE_COUNTRIES,
    countries
})

export const fetchCountries = () => dispatch => CountryApiUtil.getCountries()
    .then(countries => dispatch(receiveCountries(countries)))