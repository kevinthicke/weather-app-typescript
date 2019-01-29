import convertTemperaturefromKelvinToCentrigrates from "./temperatureConverter";
import ICurrentWeather from '../models/weatherModels';

export default function filterCurrentWeather(data): ICurrentWeather {
    
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
    
    return ({ temperature, pressure, humidity, name, weatherId }) as ICurrentWeather;
}
