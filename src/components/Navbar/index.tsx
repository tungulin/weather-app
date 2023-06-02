import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from '@mui/icons-material';
import { Room } from '@mui/icons-material';

import { toogleSidebar } from 'store/slice/defaultSlice'
import { ISlice } from 'store/slice/ISlice';

import './Navbar.scss'

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const country = useSelector((state: ISlice) => state.default.country)

    const onToggleSidebar = () => dispatch(toogleSidebar())

    return (
        <div className='navbar'>
            <div className="navbar__name">
                Weather<span>APP</span>
            </div>
            <div className='navbar__location'>
                <Room /> {country.city ? country.city : '--'}
            </div>
            <div className='navbar__menu'>
                <button onClick={onToggleSidebar}>
                    <Menu />
                </button>
            </div>
        </div>
    )
}

export default Navbar