import React, { FC } from 'react'
import moment from 'moment';
import { ISmallCard } from './ICard'
import { Clear } from '@mui/icons-material';

import './SmallCard.scss'

const SmallCard: FC<ISmallCard> = ({
    name,
    temp,
    type,
    //todo
    // functions = {
    //     onDelete: () => { }
    // }
}) => {

    return (
        <div className={`smallCard --${type}`}>
            {/* <button className='smallCard__delete'>
                <Clear />
            </button> */}
            <div className='smallCard__body'>
                {temp}°
            </div>
            <div className="smallCard__title">
                <div className="smallCard__title__subName">
                    {name}
                </div>
            </div>
        </div>
    )
}

export default SmallCard