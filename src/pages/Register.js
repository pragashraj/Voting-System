import React, { Component } from 'react'
import '../css/MainPages/register.css'
import CustomInput from '../components/custom/CustomInput'


class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="titleBlock">
                    <p className="register-title">Register</p>
                    <p className="register-step">Step 01 : Enter Your NIC</p>
                </div>
                <div className="register-input">
                    <div className="register-form-container">
                        <form className="register-form">
                            <CustomInput label ="NIC NO "/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register