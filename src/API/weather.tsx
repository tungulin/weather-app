import axios from "axios";
import { IWeatherParams } from "./IAPI";

const instance = axios.create({ baseURL: 'https://api.open-meteo.com' });

export const getHistoryWeather = (data: IWeatherParams) => {
    return instance.get('/v1/forecast', {
        params: {
            ...data,
            current_weather: true,
            daily: "apparent_temperature_max,apparent_temperature_min,weathercode"
        }
    }).then(resp => resp.data)
}