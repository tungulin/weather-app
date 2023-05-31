import React, { FC } from 'react';
import { ArrowBack } from '@mui/icons-material';

import './Sidebar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ISlice } from '../../store/slice/ISlice'
import { toogleSidebar } from '../../store/slice/defaultSlice'

const Sidebar: FC = () => {
    const isOpenSidebar = useSelector((state: ISlice) => state.default.isOpenSidebar)
    const dispatch = useDispatch()

    const onToggleSidebar = () => {
        dispatch(toogleSidebar())
    }

    return (
        <div className={`sidebar ${!isOpenSidebar ? '--open' : ''}`}>
            <div className='sidebar__title'>
                <button className="sidebar__title__left" onClick={onToggleSidebar}>
                    <ArrowBack />
                </button>
                <div className="sidebar__title__right">
                    Weather<span>APP</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar