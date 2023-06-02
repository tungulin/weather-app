import React, { FC } from 'react'
import SyncLoader from "react-spinners/SyncLoader";

import './Loader.scss'

const Loader: FC = () => {
    return (
        <div className="loader">
            <div className="loader__load">
                <SyncLoader size={10} color={'#fff'} />
            </div>
        </div>
    )
}


export default Loader