

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
    city: ICity,
    country: ICountry
}