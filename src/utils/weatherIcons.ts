const weathers = { 
    showers:  [300, 301, 302, 310, 311, 312, 313, 314, 321],
    rain:     [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    snow:     [600, 601, 602, 611, 612, 615, 616, 620, 621, 622],
    fog:      [711, 731, 741, 751, 761, 762, 771, 781],
    cloud:    [801, 802, 803, 804]
};

export const getWeatherKeyword = (id) => {
    const aWeathersValues = Object.keys(weathers).map(key => weathers[key])
    
    let weatherIndex = null; 

    aWeathersValues.forEach(
        (weatherValues, index) => weatherValues.forEach(
            value => {
                if (value==id) {
                    weatherIndex = index;
                }
            })
        )
    // console.log(`id = ${id}, weatherIndex=${weatherIndex}`);
    return (weatherIndex===null) ? 'day-sunny': Object.keys(weathers)[weatherIndex];
}
