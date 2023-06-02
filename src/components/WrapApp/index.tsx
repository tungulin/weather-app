import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { IWrapAppProps } from './IWrapApp'
import { getCountryData } from '../../API/country';
import { setCountry, setWeather } from '../../store/slice/defaultSlice';
import { getHistoryWeather } from '../../API/weather';

const WrapApp = (props: IWrapAppProps) => {
    const dispatch = useDispatch()

    useEffect(() => {
        getGeolocation()
    }, [])

    const getGeolocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => getCountry(position),
                (err) => toast.error('Location not received')
            )
        }
    }

    const getCountry = async (position: GeolocationPosition) => {

        const { latitude, longitude } = position.coords
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        await getCountryData({ latitude, longitude })
            .then(city => dispatch(setCountry(city)))

        await getHistoryWeather({
            latitude,
            longitude,
            past_days: 5,
            timezone
        }).then(weather => dispatch(setWeather(weather)))
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default WrapApp