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