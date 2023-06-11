export interface IWrapAppProps {
    children: string | JSX.Element | JSX.Element[]
}

export interface ILocationState {
    pathname?: string;
    search?: string;
    hash?: string;
}


export interface ICity {
    value: number,
    coords: { lat: number, lon: number },
    subject: string,
    name: string
}

export interface ICountry {
    value: number,
    name: string
}

export interface ICities {
    value: number,
    city: ICity,
    country: ICountry
}

export interface ILocationsWeather {
    value: number,
    city: string,
    country: string,
    temp: string
}
