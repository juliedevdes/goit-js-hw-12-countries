import countryCard from '../src/country-card.hbs'; // handlebars

import fetchCountries from './fetchCountries'; // fetch func

//references

const input = document.querySelector('.input');
const container = document.querySelector('.container');

fetchCountries('POrtugal')
  .then(renderOneCountryCard)
  .catch(error => console.log(error));

//render one country
function renderOneCountryCard(country) {
  const markup = countryCard(country[0]);
  container.innerHTML = markup;
}

//render list of contries

//eventList

//
