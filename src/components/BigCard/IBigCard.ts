export interface IBigCardItem {
    num: string,
    title: string,
}

export interface IBigCard {
    temp: number,
    subName: string,
    items?: IBigCardItem[]
    type: string
}