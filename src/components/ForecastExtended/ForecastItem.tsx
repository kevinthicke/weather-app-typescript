import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { getWeatherKeyword } from '../../utils/weatherIcons';
import WeatherIcons from 'react-weathericons';


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
    const { weatherKeyword, temperature, humidity, pressure } = forecast;
    const weatherIcon = getWeatherKeyword(weatherKeyword)
    return (
        <Panel bsStyle="primary" key={forecast.datetime}>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{forecast.datetime}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <div style={bodyStyle}>
                    <span style={bodyItemStyle}><WeatherIcons name={weatherIcon} size="2x" /></span>
                    <span style={bodyItemStyle}>Temperature { temperature } ºC</span>
                    <span style={bodyItemStyle}>Humidity { humidity } %</span>
                    <span style={bodyItemStyle}>Pressure { pressure } atm</span>
                </div>
            </Panel.Body>
        </Panel>
    )

}