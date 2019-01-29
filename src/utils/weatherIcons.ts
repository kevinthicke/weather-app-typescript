const weathers = { 
    showers:  [300, 301, 302, 310, 311, 312, 313, 314, 321],
    rain:     [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    snow:     [600, 601, 602, 611, 612, 615, 616, 620, 621, 622],
    fog:      [711, 731, 741, 751, 761, 762, 771, 781],
    cloud:    [801, 802, 803, 804]
};

type TWeatherKeyword = "showers" | "rain" | "snow" | "fog" | "cloud" | "day-sunny";

export function getWeatherKeyword (id: number): TWeatherKeyword {
    const aWeathersValues = Object.keys(weathers).map(key => weathers[key])
    
    let weatherIndex = null; 

    aWeathersValues.forEach(
        (weatherValues: Array<number>, index: number) => weatherValues.forEach(
            (value: number) => {
                if (value==id) {
                    weatherIndex = index;
                }
            })
        )
    
    const weatherKeyword = (weatherIndex===null) ? "day-sunny" : Object.keys(weathers)[weatherIndex];

    return weatherKeyword as TWeatherKeyword;
}