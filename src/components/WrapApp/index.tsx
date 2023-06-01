import React, { FC, useEffect, useState } from 'react'
import { IWrapAppProps, ILocationState } from './IWrapApp'
import useGeolocation from "react-hook-geolocation";

const WrapApp = (props: IWrapAppProps) => {

    // const geolocation = useGeolocation();
    // const isLoading = useState<boolean>(false)

    // useEffect(() => {
    //     getGeolocation()
    // }, [])

    // const getGeolocation = async () => {

    // }

    // if (!isLoading) return

    return (
        <>
            {props.children}
        </>
    )
}

export default WrapApp