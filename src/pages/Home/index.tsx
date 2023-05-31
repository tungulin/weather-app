import React, { FC } from 'react'
import './Home.scss'
import BigCard from '../../components/BigCard'

const Home: FC = () => {
    return <div className='home --show'>
        <BigCard />
    </div>
}

export default Home