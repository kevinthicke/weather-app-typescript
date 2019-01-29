const kelvin = 273.15;

const convertTemperaturefromKelvinToCentrigrates = (degrees: number): number => {
    const centigrates = (degrees-kelvin).toFixed(0);
    return Number(centigrates);
}

export default convertTemperaturefromKelvinToCentrigrates;