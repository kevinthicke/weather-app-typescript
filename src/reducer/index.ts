import { ActionTypes } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CURRENT_WEATHER:
            return ({
                ...state,
                aCurrentWeather: state.aCurrentWeather.concat(action.payload)
            });
        case ActionTypes.DELETE_FAV_LOCATION: 
            return ({
                ...state,
                aCurrentWeather: state.aCurrentWeather.filter(weather => weather.name !== action.payload)
            })
        default:
            return state;
    }
}