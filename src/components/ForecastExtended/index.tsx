import * as React from 'react';

export default class ForecastExtended extends React.Component <any,any> {
    render() {
        console.log(this.props.weatherForecast);
        return <div>Forecast Extended</div>
    }
}