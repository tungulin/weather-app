import React, { FC } from 'react'
import { Menu } from '@mui/icons-material';
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { toogleSidebar } from '../../store/slice/defaultSlice'

const Navbar: FC = () => {
    const dispatch = useDispatch()

    const onToggleSidebar = () => {
        dispatch(toogleSidebar())
    }

    return (
        <div className='navbar'>
            <div className='navbar__menu'>
                <button onClick={onToggleSidebar}>
                    <Menu />
                </button>
            </div>
        </div>
    )
}

export default Navbar