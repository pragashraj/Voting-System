import React from 'react'
import '../../css/header/header.css'

import srilankaLogo from '../../assets/srilankaLogo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={srilankaLogo} alt="logo" className="logo"/>
            </div>
            <div className="logo-text-container">
                <p className="logo-text">Election Department - SriLanka</p>
            </div>
        </div>
    )
}

export default Header
