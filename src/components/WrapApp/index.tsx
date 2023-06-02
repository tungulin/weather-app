import React, { FC, useEffect, useState } from 'react'
import { IWrapAppProps } from './IWrapApp'
import { toast } from 'react-hot-toast';
import { getCountryData } from '../../API/country';
import { useDispatch } from 'react-redux';
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

        await getCountryData({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            .then(city => {
                dispatch(setCountry(city))
                return city
            })

        await getHistoryWeather({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            past_days: 5,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }).then(weather => {
            dispatch(setWeather(weather))
            return weather
        })
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default WrapApp