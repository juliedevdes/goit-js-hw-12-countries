// Есть файл fetchCountries.js с дефолтным экспортом функции
// fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

import countryCard from '../src/country-card.hbs';

fetch('https://restcountries.eu/rest/v2/name/Ukraine')
  .then(response => {
    return response.json();
  })
  .then(country => {
    const markup = countryCard(country[0]);
    const card = document.querySelector('.js-country-container');
    card.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
