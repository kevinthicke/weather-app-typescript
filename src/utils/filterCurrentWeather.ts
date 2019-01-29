import convertTemperaturefromKelvinToCentrigrates from "./temperatureConverter";
import ICurrentWeather from '../models/currentWeather';

export default function filterCurrentWeather(data): ICurrentWeather {
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
        }]
    } = data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    const temperature = convertTemperaturefromKelvinToCentrigrates(temp);
    
    return ({ temperature, pressure, humidity, name, weatherId })
}
