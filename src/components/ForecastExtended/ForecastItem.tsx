import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { getWeatherKeyword } from '../../utils/weatherIcons';
import WeatherIcons from 'react-weathericons';
import convertTemperaturefromKelvinToCentrigrates from '../../utils/temperatureConverter';
import { TWeatherKeyword } from '../../models/others';


const bodyStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
}

const bodyItemStyle: React.CSSProperties = {
    fontSize: '14pt',
    display: 'flex',
    justifyContent: 'center'
}

export const ForecastItem = ({ forecast }) => {
    const { weatherId, temperature, humidity, pressure, dateTime } = forecast;

    const weatherKeyword: TWeatherKeyword = getWeatherKeyword(weatherId);
    const temp: number = convertTemperaturefromKelvinToCentrigrates(temperature);

    return (
        <Panel bsStyle="primary" key={dateTime}>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{dateTime}</Panel.Title>
            </Panel.Heading>
            <Panel.Body style={bodyStyle}>
                <div style={bodyStyle}>
                    <span style={bodyItemStyle}><WeatherIcons name={weatherKeyword} size="2x" /></span>
                    <span style={bodyItemStyle}>Temperature { temp } ºC</span>
                    <span style={bodyItemStyle}>Humidity { humidity } %</span>
                    <span style={bodyItemStyle}>Pressure { pressure } atm</span>
                </div>
            </Panel.Body>
        </Panel>
    )

}