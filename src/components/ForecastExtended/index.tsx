import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { ForecastItem } from './ForecastItem';

const data = [{ datetime: "January 28th 2019, 6:00:00 am", humidity: 68, pressure: 1005.82, temperature: 275.75, weatherId: 500 }, { datetime: "January 28th 2019, 12:00:00 pm", humidity: 66, pressure: 1010.32, temperature: 277.532, weatherId: 800 }, { datetime: "January 28th 2019, 6:00:00 pm", humidity: 61, pressure: 1012.67, temperature: 275.302, weatherId: 800 }, { datetime: "January 29th 2019, 6:00:00 am", humidity: 99, pressure: 1008.45, temperature: 273.704, weatherId: 500 }, { datetime: "January 29th 2019, 12:00:00 pm", humidity: 78, pressure: 1004.28, temperature: 279.248, weatherId: 801 }, { datetime: "January 29th 2019, 6:00:00 pm", humidity: 91, pressure: 999.92, temperature: 277.088, weatherId: 500 }, { datetime: "January 30th 2019, 6:00:00 am", humidity: 98, pressure: 999.55, temperature: 270.528, weatherId: 800 }, { datetime: "January 30th 2019, 12:00:00 pm", humidity: 84, pressure: 999.44, temperature: 277.244, weatherId: 800 }, { datetime: "January 30th 2019, 6:00:00 pm", humidity: 92, pressure: 998.65, temperature: 272.231, weatherId: 800 }, { datetime: "January 31st 2019, 6:00:00 am", humidity: 94, pressure: 997.87, temperature: 266.552, weatherId: 500 }, { datetime: "January 31st 2019, 12:00:00 pm", humidity: 100, pressure: 993.29, temperature: 274.693, weatherId: 500 }, { datetime: "January 31st 2019, 6:00:00 pm", humidity: 100, pressure: 984.67, temperature: 274.787, weatherId: 500 }, { datetime: "February 1st 2019, 6:00:00 am", humidity: 100, pressure: 977.88, temperature: 277.609, weatherId: 500 }, { datetime: "February 1st 2019, 12:00:00 pm", humidity: 100, pressure: 982.75, temperature: 279.166, weatherId: 803 }, { datetime: "February 1st 2019, 6:00:00 pm", humidity: 99, pressure: 989.53, temperature: 275.324, weatherId: 500 }]

const ForecastExtendedStyle: React.CSSProperties = {
    height: '85vh',
    overflow: 'auto'
}

export default class ForecastExtended extends React.Component<any, any> {
    renderForecastList() {
        return data.map(forecast => <ForecastItem forecast= {forecast} />)
    }

    render() {
        //console.log(JSON.stringify(this.props.weatherForecast));
        return (
            <div style={ForecastExtendedStyle}>
                <h2>Forecast Extended of ????</h2>
                { this.renderForecastList() }
            </div>
        )
    }
}