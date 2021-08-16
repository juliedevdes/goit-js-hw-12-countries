// Есть файл fetchCountries.js с дефолтным экспортом функции
// fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    if (response.status === 404) {
      return error;
    }
    return response.json();
  });
}
