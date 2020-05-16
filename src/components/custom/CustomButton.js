import React from 'react'
import '../../css/custom/customButton.css'

const CustomButton = ({btnTitle,btnValue,handleBtnTab}) => {

    const renderTitle=()=>{
        switch(btnValue){
            case "English" : return(<p style={{fontSize:'200%'}}>{btnTitle}</p>)
            case "Tamil" : return(<p style={{fontSize:'220%',fontFamily:'Bamini'}}>{btnTitle}</p>)
            case "Sinhala" : return(<p style={{fontSize:'200%'}}>{btnTitle}</p>)
            default :return null
        }
    }
    return (
        <div className="custom-button-container">
            <button className="custom-button" onClick={()=>handleBtnTab(btnValue)}>
                {
                    renderTitle()
                }
            </button>
        </div>
    )
}

export default CustomButton
