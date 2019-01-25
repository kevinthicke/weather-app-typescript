import * as React from 'react';
import CurrentWeather from './CurrentWeather';

export default class FavLocationList extends React.Component <any, any> {
    render() {
        const { aCurrentWeather } = this.props;
        return aCurrentWeather.map(currentWeather => <CurrentWeather data={currentWeather} />)  
    }
}