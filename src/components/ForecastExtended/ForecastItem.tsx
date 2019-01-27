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

export const ForecastItem = ({ forecast }) => (
    <Panel bsStyle="primary" key={forecast.datetime}>
        <Panel.Heading>
            <Panel.Title componentClass="h3">{forecast.datetime}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <div style={bodyStyle}>
                <span style={bodyItemStyle}><WeatherIcons name={getWeatherKeyword(forecast.weatherKeyword)} size="2x" /></span>
                <span style={bodyItemStyle}>Temperature {forecast.temperature} ºC</span>
                <span style={bodyItemStyle}>Humidity {forecast.humidity} %</span>
                <span style={bodyItemStyle}>Pressure {forecast.pressure} atm</span>
            </div>
        </Panel.Body>
    </Panel>
)