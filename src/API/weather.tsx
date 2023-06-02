import axios from "axios";

const instance = axios.create({ baseURL: 'https://api.open-meteo.com' });

export const getHistoryWeather = (data: { latitude: number, longitude: number, past_days: number, timezone: string }) => {
    return instance.get('/v1/forecast', { params: { ...data, current_weather: true, daily: "apparent_temperature_max,weathercode" } }).then(resp => resp.data)
}