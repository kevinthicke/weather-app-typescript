import convertTemperaturefromKelvinToCentrigrates from "./temperatureConverter";
import ICurrentWeather from '../models/currentWeather';

export default function filterCurrentWeather(data) {
    console.log(data);
    const {  
        main: { 
            temp,
            pressure,
            humidity
        },
        name,
        weather: [{
            id: weatherId
        }],
        id,
        wind: {
            deg,
            speed
        }
    } = data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    const temperature = convertTemperaturefromKelvinToCentrigrates(temp);
    
    return ({ temperature, pressure, humidity, name, id, deg, speed, weatherId })
}
