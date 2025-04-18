import React from 'react'
import HeaderInfo from './info/HeaderInfo'
import FooterInfo from './info/FooterInfo'
import { Outlet } from 'react-router-dom'
const InfoLayaout = () => {
    return (
        <>
            <HeaderInfo></HeaderInfo>
            <Outlet></Outlet>
            <FooterInfo></FooterInfo>
        </>
    )
}

export default InfoLayaout
