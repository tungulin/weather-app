export interface ICardItem {
    num: string,
    title: string,
}

export interface ICard {
    time: string,
    items?: ICardItem[]
    type: string
}

export interface IBigCard extends ICard {
    items?: ICardItem[]
}

export interface ISmallCard {
    value: number,
    type: string
    name: string,
    temp: number,
}