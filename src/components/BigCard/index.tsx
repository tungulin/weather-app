import React, { FC } from 'react'
import './BigCard.scss'
import { IBigCard, IBigCardItem } from './IBigCard'

const BigCard: FC<IBigCard> = ({ type, temp, subName, items = [] }) => {

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
                <div className="bigCard__title__temp">
                    {temp}°
                </div>
                <div className="bigCard__title__subName">
                    {subName}
                </div>
            </div>
            <div className='bigCard__body'>
                {items.map(item => {
                    return <InfoItem num={"10%"} title='MIN' />
                })}
            </div>
        </div>
    )
}

export default BigCard