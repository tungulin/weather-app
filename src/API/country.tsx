import axios from "axios";

const instance = axios.create({ baseURL: 'https://api.bigdatacloud.net' });

export const getCountryData = (data: { latitude: number, longitude: number }) => {
    return instance.get('/data/reverse-geocode-client', { params: data }).then(resp => resp.data)
}
