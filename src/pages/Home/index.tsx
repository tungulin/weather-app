import React, { FC, useEffect, useState } from 'react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

import Loader from 'components/Loader';
import BigCard from 'components/Cards/BigCard'
import { chooseTypeWeather } from 'helpers/utils'
import { ISlice } from 'store/slice/ISlice';
import { ICards } from './IHome';

import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import './Home.scss'

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
                items: [
                    { num: daily.apparent_temperature_max[i].toString() + '°', title: 'Max' },
                    { num: daily.apparent_temperature_min[i].toString() + '°', title: 'Min' },
                ]
            })
        }

        setCards(cards)
    }

    if (!cards.length) return (
        <div className=' home --show'>
            <Loader />
        </div>
    )

    return <div className=' home --show'>
        <div className='container'>
            <Swiper
                spaceBetween={1}
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 10,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
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