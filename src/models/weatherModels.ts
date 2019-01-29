export default interface ICurrentWeather {
    name: string,
    temperature: number, 
    pressure: number, 
    humidity: number,
    weatherId: number
}

export default interface IForecastExtended {
    weatherId: number, 
    temperature: number,
    humidity: number,
    pressure: number, 
    dateTime: string,
    name: string
}
