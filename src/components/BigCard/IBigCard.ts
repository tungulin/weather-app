export interface IBigCardItem {
    num: string,
    title: string,
}

export interface IBigCard {
    time: string,
    temp: number,
    items?: IBigCardItem[]
    type: string
}