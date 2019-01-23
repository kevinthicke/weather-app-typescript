import convertTemperaturefromKelvinToCentrigrates from "./temperatureConverter";
import currentWeatherInterface from '../models/currentWeather';

export default function filterCurrentWeather(data): currentWeatherInterface {
    const {  
        main: { 
            temp,
            pressure,
            humidity
        },
        weather: [{
            id: weatherId
        }],
        wind: {
            deg,
            speed
        }
    } = data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    const temperature = convertTemperaturefromKelvinToCentrigrates(temp);
    
    return ({ temperature, pressure, humidity, deg, speed, weatherId })
}
