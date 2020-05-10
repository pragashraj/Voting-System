import React, { Component } from 'react'
import '../css/MainPages/register.css'
import CustomInput from '../components/custom/CustomInput'
import fingerprint from '../assets/fingerprint.jpg'

class Register extends Component {

    renderStep01=()=>{
        return(
            <div className="step01">
                <div className="titleBlock">
                    <p className="register-title">Register</p>
                    <p className="register-step">Step 01 : Enter Your NIC</p>
                </div>
                <div className="register-input">
                    <div className="register-form-container">
                        <form className="register-form">
                            <CustomInput label ="NIC NO "/>
                        </form>

                        <div className="register-submit-container">
                            <button className="register-submit">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderStep02=()=>{
        return(
            <div className="step02">
                <div className="titleBlock">
                    <p className="register-title">Register</p>
                    <p className="register-step">Step 02 : With your FingerPrint</p>
                </div>

                <div className="fingerprintBlock">
                    <div className="fingerprint-Image-container">
                        <img src={fingerprint} alt="finger print" className="fingerprint-Image"/>
                    </div>
                    <div className="fingerprint-message-container">
                        <p className="fingerprint-message">Please Place Your Finger In the Scanner</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="register">
                {
                    this.renderStep02()
                }
            </div>
        )
    }
}

export default Register