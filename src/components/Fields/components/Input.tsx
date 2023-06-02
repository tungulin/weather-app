import React, { FC } from 'react'
import { IField } from '../IFields'

const Input: FC<IField> = ({ defaultValue, title, subTitle, label, placeholder, register, required, error }) => {
    return (
        <div className='inputContainer'>
            {title && <div className='inputContainer__title' >
                <h4>{title}</h4>
                {required && <h4 className='required'>*</h4>}
            </div>}
            {subTitle && <div className='inputContainer__subTitle'>
                {subTitle}
            </div>}
            <div className='inputContainer__body'>
                <input placeholder={placeholder} {...register(label, { required, value: defaultValue })} />
            </div>
        </div >
    )
}

export default Input