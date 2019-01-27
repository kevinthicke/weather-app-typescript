import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';

const initialState = {
    aCurrentWeather: [],
    weatherForecast: {}
}

export default createStore(reducer, initialState as any, applyMiddleware(thunk));