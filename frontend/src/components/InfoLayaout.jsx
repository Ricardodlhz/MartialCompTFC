import React from 'react'
import HeaderInfo from './info/HeaderInfo'
import Footer from './main/Footer'
import { Outlet } from 'react-router-dom'
const InfoLayaout = () => {
    return (
        <>
            <HeaderInfo></HeaderInfo>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default InfoLayaout
