import React from 'react'
import '../../css/custom/customButton.css'

const CustomButton = ({btnTitle}) => {
    return (
        <div className="custom-button-container">
            <button className="custom-button">
                <p style={{fontSize:'200%'}}>{btnTitle}</p>
            </button>
        </div>
    )
}

export default CustomButton
