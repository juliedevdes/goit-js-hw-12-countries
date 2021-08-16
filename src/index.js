import countryCard from './country-card.hbs';
import countriesList from './country-list.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';
import * as _ from 'lodash';

import fetchCountries from './fetchCountries'; // fetch func

//references
const input = document.querySelector('.input');
const container = document.querySelector('.container');

// ---- RENDER ----
//render one country
function renderOneCountryCard(country) {
  const markup = countryCard(country[0]);
  container.innerHTML = markup;
}

//render list of contries
function renderCountriesList(countries) {
  const obj = { countries: countries };
  const markup = countriesList(obj);
  container.innerHTML = markup;
}

//func for errors
function onError() {
  container.innerHTML = '';
  return error({
    text: 'Error. There is no such country in database',
    type: 'error',
    autoOpen: 'false',
    delay: 1000,
    animation: 'fade',
  });
}

//if too many countries func
function onNotSpecQuery() {
  info({
    text: 'Too much countries. Type more specific',
    type: 'info',
    autoOpen: 'false',
    delay: 1000,
    animation: 'fade',
  });
  container.innerHTML = '';
}

//API func
function ApiResponseArrayHandler(countries) {
  if (countries.length > 10) {
    onNotSpecQuery();
  } else if (countries.length === 1) {
    renderOneCountryCard(countries);
  } else if (countries.length <= 10) {
    renderCountriesList(countries);
  }
}

// ======= API request ======
const inputHandler = event => {
  event.preventDefault();
  const inputValue = event.target.value;
  fetchCountries(inputValue).then(ApiResponseArrayHandler).catch(onError);
};

//eventList
input.addEventListener('input', _.debounce(inputHandler, 500));
