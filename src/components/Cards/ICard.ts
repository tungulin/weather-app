export interface ICardItem {
    num: string,
    title: string,
}

export interface ICard {
    time: string,
    items?: ICardItem[]
    type: string
}

export interface ICard {
    time: string,
    type: string
}


export interface IBigCard extends ICard {
    items?: ICardItem[]
}

export interface ISmallCard extends ICard {
    name: { country: string, city: string },
    degree: number
}