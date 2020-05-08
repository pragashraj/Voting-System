import React from 'react'
import '../css/MainPages/home.css'
import CustomButton from '../components/custom/CustomButton'

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content">
                    <p className="language-selection">Select Your language</p>

                     <div className="home-content-btn">
                        <CustomButton btnTitle="Sinhala"/>
                     </div>

                     <div className="home-content-btn">
                        <CustomButton btnTitle="Tamil"/>
                    </div>

                    <div className="home-content-btn">
                        <CustomButton btnTitle="English"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
