import filterForecastByHour, { unixTimeToString } from './moment';


export default function filterWeatherForecast(data) {
    
    const {
        city: {
            name
        },
        list: forecast
    } = data;
    
    const aFilteredForecastByHour = filterForecastByHour(forecast);
    
    return aFilteredForecastByHour.map(element => {
        const {
            dt: unixTime,
            main: {
                humidity,
                pressure,
                temp: temperature
            },
            weather: [{
                id: weatherId
            }]
        } = element;

        const dateTime = unixTimeToString(unixTime);

        return({ name, dateTime, humidity, pressure, temperature, weatherId });
    });
}
