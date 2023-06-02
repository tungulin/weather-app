import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowBack, GitHub } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { ISlice } from 'store/slice/ISlice'
import { toogleSidebar } from 'store/slice/defaultSlice'
import Fields from '../Fields';

import './Sidebar.scss'

const Sidebar: FC = () => {
    const isOpenSidebar = useSelector((state: ISlice) => state.default.isOpenSidebar)
    const dispatch = useDispatch()

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onSubmit",
        shouldUnregister: true,
    });

    const onToggleSidebar = () => {
        dispatch(toogleSidebar())
    }

    return (
        <div className={`sidebar ${isOpenSidebar ? '--open' : ''}`}>
            <div className='sidebar__title'>
                <button className="sidebar__title__left" onClick={onToggleSidebar}>
                    <ArrowBack />
                </button>
                <div className="sidebar__title__right">
                    Weather<span>APP</span>
                    <span className='github'>
                        <a href='https://github.com/tungulin' target="_blank">
                            <GitHub />
                        </a>
                    </span>
                </div>
            </div>
            <div className="sidebar__body">
                <Fields.input
                    title='Search country:'
                    label='search'
                    placeholder='Find your country'
                    register={register}
                    error={errors.search} />

                <div className='sidebar__body__countries'>
                    Soon...
                </div>
            </div>
        </div >
    )
}

export default Sidebar