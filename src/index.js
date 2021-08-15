import countryCard from './country-card.hbs'; // handlebars
import countriesList from './country-list.hbs'; // handlebars
import { alert, notice, info, success, error } from '@pnotify/core'; //photify

import fetchCountries from './fetchCountries'; // fetch func

//references
const input = document.querySelector('.input');
const container = document.querySelector('.container');

//render one country
function renderOneCountryCard(country) {
  const markup = countryCard(country[0]);
  container.innerHTML = markup;
}

//render list of contries
function renderCountriesList(countries) {
  const obj = { countries: countries }; // костыль
  const markup = countriesList(obj);
  container.innerHTML = markup;
}

//api request by input value
const inputHandler = event => {
  const inputValue = event.target.value;
  fetchCountries(inputValue)
    .then(ApiResponseArrayHandler)
    .catch(error => console.alert(error));
};

function ApiResponseArrayHandler(countries) {
  if (countries.length === 1) {
    renderOneCountryCard(countries);
    console.log('one country func');
  } else if (countries.length > 10) {
    console.log('too much countries');
  } else {
    renderCountriesList(countries);
    console.log('few country func');
  }
}

//eventList
input.addEventListener('input', inputHandler);
