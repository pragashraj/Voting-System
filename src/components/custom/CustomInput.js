import React  from 'react'
import '../../css/custom/customInput.css'

const CustomInput = ({label}) => {
    return (
        <div className="custom-input">
            <div className="custom-input-container">
                <div className="label-container">
                    <label className="custom-label">{label}</label>
                </div>

                <div className="input-container">
                    <input 
                        type="text"
                        name="nic"
                        className="custom-input-field"
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomInput
