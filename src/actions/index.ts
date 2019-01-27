import { ActionTypes } from './types';
import { urlWeather } from '../utils/url';
import filterCurrentWeather from '../utils/filterCurrentWeather';
import IcurrentWeather from '../models/currentWeather';

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

export const getForecastExtended = (city: string) => ({
    type: ActionTypes.FETCH_FORECAST_EXTENDED,
    payload: `Forecast extended of ${city}`
})