import React, { FC, useEffect, useState } from 'react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BigCard from '../../components/BigCard'
import { chooseTypeWeather } from '../../helpers/utils'

import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import './Home.scss'
import { useSelector } from 'react-redux';
import { ISlice } from '../../store/slice/ISlice';
import { ICards } from './IHome';

const Home: FC = () => {
    const weather = useSelector((state: ISlice) => state.default.weather)
    const [cards, setCards] = useState<ICards[]>([])

    useEffect(() => {
        if (weather.daily.time.length > 0) {
            parseWeather()
        }
    }, [weather])

    const parseWeather = () => {
        const cards: ICards[] = []
        const daily = weather.daily
        const lengthWeather = daily.weathercode.length

        for (let i = 0; i < lengthWeather; i++) {

            cards.push({
                time: daily.time[i],
                type: chooseTypeWeather(daily.weathercode[i]),
                temp: daily.apparent_temperature_max[i],
                items: [
                    { num: '10', title: '123' },
                    { num: '10', title: '123' },
                    { num: '10', title: '123' }
                ]
            })
        }

        setCards(cards)
    }

    const slides = [
        {
            type: 'sunny',
            temp: 20,
            subName: 'clear day',
            items: [
                { num: '10', title: '123' },
                { num: '10', title: '123' },
                { num: '10', title: '123' }
            ]
        },
        {
            type: 'dark',
            temp: 10,
            subName: 'clear day',
            items: [
                { num: '10', title: '123' },
                { num: '10', title: '123' },
                { num: '10', title: '123' }
            ]
        },
        {
            type: 'sunny',
            temp: 10,
            subName: 'clear day',
            items: [
                { num: '10', title: '123' },
                { num: '10', title: '123' },
                { num: '10', title: '123' }
            ]
        },
        {
            type: 'rain', temp: 10,
            subName: 'clear day',
            items: [
                { num: '10', title: '123' },
                { num: '10', title: '123' },
                { num: '10', title: '123' }
            ]
        },
        {
            type: 'wind',
            temp: 10,
            subName: 'clear day',
            items: [
                { num: '10', title: '123' },
                { num: '10', title: '123' },
                { num: '10', title: '123' }
            ]
        }
    ]

    return <div className=' home --wind'>
        <div className='container'>
            <Swiper
                spaceBetween={1}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 10,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="swiper_container"
            >
                {
                    cards.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <BigCard {...slide} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    </div >
}

export default Home