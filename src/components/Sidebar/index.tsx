import React, { FC, useEffect, useRef } from 'react';
import { useForm, useWatch, SubmitHandler } from 'react-hook-form';
import { ArrowBack, GitHub } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { ISlice } from 'store/slice/ISlice'
import { toogleSidebar } from 'store/slice/defaultSlice'
import SmallCard from 'components/Cards/SmallCard';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { toast } from 'react-hot-toast';
import Fields from '../Fields';


import dataRussia from "data/cities/Russia.json"
import dataCountry from "data/country.json"

import './Sidebar.scss'


const Sidebar: FC = () => {
    const isOpenSidebar = useSelector((state: ISlice) => state.default.isOpenSidebar)
    const locationsWeather = useSelector((state: ISlice) => state.default.locationsWeather)
    const [cities, setCities] = useLocalStorage('cities', [])

    const dispatch = useDispatch()

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onSubmit",
        shouldUnregister: true,
    });

    const country = useWatch({ control, name: "country" });
    const city = useWatch({ control, name: "city" });

    const onToggleSidebar = () => dispatch(toogleSidebar())

    const onClickAddCity = (data: any) => {
        const isAddedCity = cities.find((locationData: any) => locationData.city.name === data.city.name)

        if (!isAddedCity) {
            setCities([...cities, { value: cities.length + 1, ...data }])
            toast.success('You added city. Refresh page please')
        } else {
            toast.error('This city has already been added')
        }
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
                            error={errors.country}
                        />

                        {country && <div className="sidebar__body__header__submit">
                            <Fields.autocomplete
                                title='Choose city:'
                                label='city'
                                placeholder='Your city...'
                                control={control}
                                getOptionLabel={(option) => option.name + "/" + option.subject}
                                values={dataRussia}
                                error={errors.city}
                            />
                            <button type='submit' disabled={!city} className={`btn ${city ? '' : '--disabled'}`}>Add</button>
                        </div>}
                    </div>
                </form>
                <div className='sidebar__body__cities'>
                    <div className="sidebar__body__cities__title">Your cities:</div>
                    <div className="sidebar__body__cities__body">
                        {locationsWeather.length !== 0 && locationsWeather.map((location, key) => {
                            return (
                                <SmallCard
                                    value={location.value}
                                    key={key}
                                    name={location.city + '/' + location.country}
                                    temp={location.temp}
                                    type={location.type}
                                />
                            )
                        })}
                        {locationsWeather.length === 0 && <div className='empty'>
                            <span>You don't have any cities selected</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar