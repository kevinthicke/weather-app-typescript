import { apikey } from './../credentials';
const url = "http://api.openweathermap.org/data/2.5/"

export const urlWeather = city => `${url}weather?q=${city}&APPID=${apikey}`;