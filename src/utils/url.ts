import { apikey } from './../credentials';
const url = "http://api.openweathermap.org/data/2.5/"

export const urlWeather = (city: string): string => `${url}weather?q=${city}&APPID=${apikey}`;

export const urlForecast = (city: string): string => `${url}forecast?q=${city}&APPID=${apikey}`;