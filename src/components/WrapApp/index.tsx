import React, { FC } from 'react'
import { IWrapAppProps, ILocationState } from './IWrapApp'
import useGeolocation from "react-hook-geolocation";

const WrapApp = (props: IWrapAppProps) => {

    const geolocation = useGeolocation();

    return (
        <>
            {console.log('geolocation', geolocation)}

            {/* {props.children} */}
        </>
    )
}

export default WrapApp