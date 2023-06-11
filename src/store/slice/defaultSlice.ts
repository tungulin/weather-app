import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDefaultSliceState, ILocationsWeather, IWeather, ICountry } from './ISlice'

const initialState: IDefaultSliceState = {
    isOpenSidebar: false,
    country: {
        city: "",
        continent: "",
        countryName: ""
    },
    weather: {
        current_weather: 0,
        daily: {
            time: [],
            apparent_temperature_max: [],
            apparent_temperature_min: [],
            weathercode: [],
        }
    },
    locationsWeather: []
}

export const defaultSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toogleSidebar: state => { state.isOpenSidebar = !state.isOpenSidebar },
        setCountry: (state, action: PayloadAction<ICountry>) => { state.country = action.payload },
        setWeather: (state, action: PayloadAction<IWeather>) => { state.weather = action.payload },
        setLocationsWeather: (state, action: PayloadAction<ILocationsWeather[]>) => { state.locationsWeather = action.payload },
    },
})

export const { toogleSidebar, setCountry, setWeather, setLocationsWeather } = defaultSlice.actions