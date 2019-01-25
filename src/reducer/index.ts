import { ActionTypes } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CURRENT_WEATHER:
            return ({
                ...state,
                aCurrentWeather: state.aCurrentWeather.concat(action.payload)
            });
        default:
            return state;
    }
}