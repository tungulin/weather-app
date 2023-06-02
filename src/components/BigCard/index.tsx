import React, { FC } from 'react'
import moment from 'moment';
import { IBigCard, IBigCardItem } from './IBigCard'

import './BigCard.scss'

const BigCard: FC<IBigCard> = ({ time, type, items = [] }) => {

    const InfoItem: FC<IBigCardItem> = ({ num, title }) => {
        return (
            <div className='bigCard__body__item'>
                <div className='num'>{num}</div>
                <div className='title'>{title}</div>
            </div>
        )
    }

    return (
        <div className={`bigCard --${type}`}>
            <div className="bigCard__title">
                <div className="bigCard__title__subName">
                    {moment(time).format('DD MMMM')}
                </div>
            </div>
            <div className='bigCard__body'>
                {items.map((item, key) => {
                    return <InfoItem key={key} {...item} />
                })}
            </div>
        </div>
    )
}

export default BigCard