import React from 'react'
import '../../css/custom/customButton.css'

const CustomButton = ({btnTitle,handleBtnTab}) => {
    return (
        <div className="custom-button-container">
            <button className="custom-button" onClick={()=>handleBtnTab(btnTitle)}>
                <p style={{fontSize:'200%'}}>{btnTitle}</p>
            </button>
        </div>
    )
}

export default CustomButton
