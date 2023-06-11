import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { ICities, IWrapAppProps, ILocationsWeather } from './IWrapApp'
import { setCountry, setWeather, setLocationsWeather } from 'store/slice/defaultSlice';
import { getCountryData } from 'API/country';
import { getHistoryWeather } from 'API/weather';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { chooseTypeWeather } from 'helpers/utils';

const WrapApp = (props: IWrapAppProps) => {
    const dispatch = useDispatch()
    const [cities, setCities] = useLocalStorage('cities', [])

    useEffect(() => {
        getGeolocation()
    }, [])

    const getGeolocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => getCountry(position),
                (err) => toast.error('Location not received. You may need to enable VPN :)')
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


        const promisesLocationsWeather: Promise<void>[] = []

        cities.forEach((data: ICities) => {
            promisesLocationsWeather.push(
                getHistoryWeather({
                    latitude: data.city.coords.lat,
                    longitude: data.city.coords.lon,
                    past_days: 0,
                    timezone
                }).then(weather => Object({
                    weather,
                    value: data.value,
                    country: data.country,
                    city: data.city
                }))
            )
        })

        const localtionsWeather = await Promise
            .all(promisesLocationsWeather)
            .then((locations: any[]) =>
                locations.map((location: any) => {
                    return Object({
                        value: location.value,
                        city: location.city?.name,
                        country: location.country?.name,
                        temp: location.weather?.current_weather?.temperature,
                        type: chooseTypeWeather(location.weather?.current_weather?.weathercode)
                    })
                })
            )

        dispatch(setLocationsWeather(localtionsWeather))
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default WrapApp