import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from "./store";
import { getCurrentWeather } from './actions/index';

store.dispatch(getCurrentWeather('London'))

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(rootComponent, document.getElementById("app"));
