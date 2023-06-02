
export interface IDefaultSliceState {
    isOpenSidebar: boolean,
    country: ICountry,
    weather: IWeather
}

export interface IWeather {
    current_weather: number,
    daily: {
        time: string[],
        apparent_temperature_max: number[],
        weathercode: number[]
    }
}

export interface ICountry {
    city: string,
    continent: string,
    countryName: string
}


export interface ISlice {
    default: IDefaultSliceState
}