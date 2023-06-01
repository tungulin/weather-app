import React, { FC } from 'react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BigCard from '../../components/BigCard'

import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import './Home.scss'

const Home: FC = () => {

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

    return <div className=' home --show'>
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
                    slides.map((slide, index) => {
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