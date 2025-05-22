import React from 'react'
import HeaderInfo from './info/HeaderInfo'
import FooterInfo from './info/FooterInfo'
import { Outlet } from 'react-router-dom'

const InfoLayaout = () => {
    return (
        <div className="layout-container">
            <HeaderInfo />
            <div className="content">
                <Outlet />
            </div>
            <FooterInfo />
        </div>
    )
}

export default InfoLayaout

