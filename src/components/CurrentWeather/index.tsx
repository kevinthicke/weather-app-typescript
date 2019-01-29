import * as React from 'react';
import ExtraInfo from './weatherData/ExtraInfo';
import Temperature from './weatherData/Temperature';
import Location from './Location';
import { getWeatherKeyword } from '../../utils/weatherIcons';
import ICurrentWeather from '../../models/currentWeather';

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
    data: ICurrentWeather,
    handleCityMoreInfo: (city: string) => void,
    handleCityToBeRemoved: (city: string) => void
}

export default class CurrentWeather extends React.Component <CurrentWeatherProps, {}> {
    constructor(props: any) {
        super(props);

        this.onCityToBeRemoved = this.onCityToBeRemoved.bind(this);
        this.onCityMoreInfo = this.onCityMoreInfo.bind(this);
    }
    
    onCityToBeRemoved(city: string) {
        this.props.handleCityToBeRemoved(city)
    }

    onCityMoreInfo(city: string) {
        this.props.handleCityMoreInfo(city);
    }

    render() {
        const { data } = this.props;
        const weatherKeyword = getWeatherKeyword(data.weatherId);
        
        return(
            <div style={CurrentWeatherStyle}>
                <Location 
                    city={data.name} 
                    handleRemoveCurrentWeather={this.onCityToBeRemoved}
                    handleClickMoreInfo={this.onCityMoreInfo} />
                <Temperature temperature={data.temperature} weatherKeyword={weatherKeyword} />
                <ExtraInfo humidity={data.humidity} pressure={data.pressure} /> 
            </div>
        )
    }
}