import * as React from 'react';
import WeatherIcons from 'react-weathericons';

const temperatureStyle: React.CSSProperties = {
    fontSize: '22pt',
    background: '#5bc0de',
    color: '#292b2c',
    borderRadius: '2px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '20px'
}

const temperatureItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export interface TemperatureProps {
    temperature: number,
    weatherKeyword: string
}

const Temperature: React.SFC<TemperatureProps> = ({ temperature, weatherKeyword }) => { 
    return(
        <div style={temperatureStyle}>
            <span style={temperatureItemStyle}>{ temperature }ºC</span>
            <span style={temperatureItemStyle}><WeatherIcons name={weatherKeyword} size="2x" /></span>
        </div>
    )
}

export default Temperature;