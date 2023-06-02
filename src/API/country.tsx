import axios from "axios";
import { ICountryParams } from "./IAPI";

const instance = axios.create({ baseURL: 'https://api.bigdatacloud.net' });

export const getCountryData = (data: ICountryParams) => {
    return instance.get('/data/reverse-geocode-client', { params: data }).then(resp => resp.data)
}
