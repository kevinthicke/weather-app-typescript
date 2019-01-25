import * as React from 'react';
import CurrentWeather from './CurrentWeather';

export default class FavLocationList extends React.Component <any, any> {
    render() {
        const { aCurrentWeather } = this.props;

        if(aCurrentWeather.length==0) {
            return <div>no hay naa que mostrar</div>
        } else return aCurrentWeather.map(currentWeather => <CurrentWeather key={currentWeather.id} data={currentWeather} />)      
    }
}