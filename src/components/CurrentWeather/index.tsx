import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import ExtraInfo from './weatherData/ExtraInfo';
import Temperature from './weatherData/Temperature';
import Location from './Location';

const data = {
    city: 'London',
    temperature: 36,
    humidity: 81,
    pressure: 11023
}

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
        return(
            <div style={CurrentWeatherStyle}>
                <Location city={'cali'} />
                <Temperature temperature={data.temperature} />
                <ExtraInfo humidity={data.humidity} pressure={data.pressure} /> 
            </div>
        )
    }
}