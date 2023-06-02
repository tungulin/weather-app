export interface IBigCardItem {
    num: string,
    title: string,
}

export interface IBigCard {
    time: string,
    items?: IBigCardItem[]
    type: string
}