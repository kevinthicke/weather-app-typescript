import * as React from 'react';
import ExtraInfo from './weatherData/ExtraInfo';
import Temperature from './weatherData/Temperature';
import Location from './Location';
import { getWeatherKeyword } from '../../utils/weatherIcons';

const CurrentWeatherStyle: React.CSSProperties = {
    width: '400px',
    height: '150px',
    display: 'grid',
    gridGap:'1px',
    gridTemplateColumns: '50% 50%',
    marginTop: '10px',
    marginBottom: '5px',
}

export interface CurrentWeatherProps {
    data: any
}

export default class CurrentWeather extends React.Component <CurrentWeatherProps, any> {

    render() {
        const { data } = this.props;
        const weatherKeyword = getWeatherKeyword(data.weatherId);
        return(
            <div style={CurrentWeatherStyle}>
                <Location city={data.name} />
                <Temperature temperature={data.temperature} weatherKeyword={weatherKeyword} />
                <ExtraInfo humidity={data.humidity} pressure={data.pressure} /> 
            </div>
        )
    }
}