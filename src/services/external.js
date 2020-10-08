import axios from 'axios';

const API_URL = {
  randomDish: 'https://www.themealdb.com/api/json/v1/1/random.php',
  drinkList: 'https://api.punkapi.com/v2/beers'
}
const headers = { 'Content-Type': 'application/json' };

//future: if we had consisten api, API_URL would be env var with address
//const add = (data) => axios.post(`${API_URL}/form`, data, { headers });

const getRandomDish = () => axios.get(API_URL.randomDish, { headers });
const getDrinkList = () => axios.get(API_URL.drinkList, { headers });


export {
  getRandomDish,
  getDrinkList
};