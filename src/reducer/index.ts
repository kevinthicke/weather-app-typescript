import { ActionTypes } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CURRENT_WEATHER:
            return ({
                ...state,
                currentWeather: action.payload
            });
        default:
            return state;
    }
}