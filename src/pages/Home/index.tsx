import React, { FC } from 'react'
import './Home.scss'
import BigCard from '../../components/BigCard'

const Home: FC = () => {
    return <div className='home --show'>
        <BigCard type={'rain'} temp={10} subName={'clear day'} items={[
            { num: '10', title: '123' },
            { num: '10', title: '123' },
            { num: '10', title: '123' }
        ]} />
    </div>
}

export default Home