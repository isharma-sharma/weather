import axios from 'axios';

const API_KEY = 'a3ba4d99aca5e1246feaa25574f27dc9';
// const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
 export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
console.log('request----', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
