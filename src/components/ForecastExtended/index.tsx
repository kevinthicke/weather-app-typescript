import * as React from 'react';
import { ForecastItem } from './ForecastItem';
import IForecastExtended from '../../models/weatherModels';

const ForecastExtendedStyle: React.CSSProperties = {
    paddingLeft: '10px',
    paddingRight: '10px',   
    height: '85vh',
    overflow: 'auto'
}

export interface ForecastExtendedProps {
    weatherForecast: IForecastExtended[]
}

export default class ForecastExtended extends React.Component<ForecastExtendedProps, any> {
    renderForecastList() {
        return this.props.weatherForecast.map(
            (forecast, index) => <ForecastItem key={index} forecast={forecast} />
            )
    }

    render() {
        const { weatherForecast } = this.props;
        
        if(weatherForecast.length!=0) {
            const city = weatherForecast[0].name;

            return (
                <div style={ForecastExtendedStyle}>
                    <h2 style={{ marginBottom: '20px' }}>Extended forecast of { city }</h2>
                    { this.renderForecastList() }
                </div>
            )
        } else return <div> </div>
        
    }
}