import React, { FC, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ArrowBack, GitHub } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { ISlice } from 'store/slice/ISlice'
import { toogleSidebar } from 'store/slice/defaultSlice'
import Fields from '../Fields';

import './Sidebar.scss'

import dataRussia from "data/cities/Russia.json"
import dataCountry from "data/country.json"
import SmallCard from 'components/Cards/SmallCard';

const Sidebar: FC = () => {
    const isOpenSidebar = useSelector((state: ISlice) => state.default.isOpenSidebar)
    const dispatch = useDispatch()

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onSubmit",
        shouldUnregister: true,
    });

    const country = useWatch({ control, name: "city" });

    const onToggleSidebar = () => {
        dispatch(toogleSidebar())
    }

    const onClickAddCity = (data: any) => {
        //todo: Add functionality
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
                <form onSubmit={handleSubmit(onClickAddCity)}>
                    <div className="sidebar__body__header">
                        <Fields.autocomplete
                            title='Search country:'
                            label='country'
                            placeholder='Your country...'
                            control={control}
                            values={dataCountry}
                            defaultValue={dataCountry[0]}
                            error={errors.country}
                        />

                        <div className="sidebar__body__header__submit">
                            <Fields.autocomplete
                                title='Choose city:'
                                label='city'
                                placeholder='Your city...'
                                control={control}
                                getOptionLabel={(option) => option.name + "/" + option.subject}
                                values={dataRussia}
                                error={errors.city}
                            />
                            <button type='submit' disabled={!country} className={`btn ${country ? '' : '--disabled'}`}>Add</button>
                        </div>
                    </div>
                </form>

                <div className='sidebar__body__cities'>
                    <div className="sidebar__body__cities__title">Your cities:</div>
                    <div className="sidebar__body__cities__body">
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                        <SmallCard name={{ city: 'cityTest', country: 'countryTets' }} degree={10} time='test' type='dark' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar