import React, { FC } from 'react'
import moment from 'moment';
import { ISmallCard } from './ICard'

import './SmallCard.scss'

const SmallCard: FC<ISmallCard> = ({ name, degree, time, type }) => {

    return (
        <div className={`smallCard --${type}`}>
            <div className='smallCard__body'>
                {degree}°
            </div>
            <div className="smallCard__title">
                <div className="smallCard__title__subName">
                    {name.country + '/' + name.city}
                </div>
            </div>
        </div>
    )
}

export default SmallCard