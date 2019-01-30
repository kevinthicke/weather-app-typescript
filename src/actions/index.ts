import { ActionTypes } from './types';
import { urlWeather, urlForecast } from '../utils/url';
import filterCurrentWeather from '../utils/filterCurrentWeather';
import IcurrentWeather from '../models/weatherModels';
import filterWeatherForecast from '../utils/filterWeatherForecast';

export interface IgetCurrentWeather {
    type: ActionTypes.FETCH_CURRENT_WEATHER,
    payload: IcurrentWeather
}

export const getCurrentWeather = (city: string) => dispatch => {
    const url = urlWeather(city);

    return fetch(url).then(
        response => response.json()).then( 
            fullData => dispatch({
                type: ActionTypes.FETCH_CURRENT_WEATHER,
                payload: filterCurrentWeather(fullData)
                //payload: fullData
            })
        )
}

export const deleteFavLocation = (city: string) => ({
    type: ActionTypes.DELETE_FAV_LOCATION,
    payload: city
})

export const getForecastExtended = (city: string) => dispatch => {
    const url = urlForecast(city);
    return fetch(url).then(
        response => response.json()).then(
            fullData => dispatch({
                type: ActionTypes.FETCH_FORECAST_EXTENDED,
                payload: filterWeatherForecast(fullData)
            })
        )
}