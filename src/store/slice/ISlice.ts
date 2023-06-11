
export interface IDefaultSliceState {
    isOpenSidebar: boolean,
    country: ICountry,
    weather: IWeather,
    locationsWeather: ILocationsWeather[] | []
}

export interface IWeather {
    current_weather: number,
    daily: {
        time: string[],
        apparent_temperature_max: number[],
        apparent_temperature_min: number[],
        weathercode: number[]
    }
}

export interface ICountry {
    city: string,
    continent: string,
    countryName: string
}

export interface ILocationsWeather {
    value: number,
    city: string,
    country: string,
    temp: number,
    type: string
}


export interface ISlice {
    default: IDefaultSliceState
}