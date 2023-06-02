import React, { FC } from 'react'
import { Menu } from '@mui/icons-material';
import './Navbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toogleSidebar } from '../../store/slice/defaultSlice'

import { Room } from '@mui/icons-material';
import { ISlice } from '../../store/slice/ISlice';

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const country = useSelector((state: ISlice) => state.default.country)

    const onToggleSidebar = () => {
        dispatch(toogleSidebar())
    }


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