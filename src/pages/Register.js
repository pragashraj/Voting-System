import React, { Component } from 'react'
import '../css/MainPages/register.css'
import CustomInput from '../components/custom/CustomInput'
import fingerprint from '../assets/images/fingerprint.jpg'

import {connect} from 'react-redux'

import {setCurrentPageIndex} from '../components/redux/actions/currentPageAction'
import Api from '../api/Api'

class Register extends Component {
    state={
        nic:'',
        userEligiblity:false,
        errorMessage:false,
        Register:'Register',
        Step01:'Step 01 : Enter Your NIC',
        Step02:'Step 02 : With your FingerPrint',
        placeFinger:'Please Place Your Finger In the Scanner',
        submitBtnTitle:'submit',
        notValid:'......Your NIC Not Valid .......'
    }

    componentDidMount(){
        this.props.setCurrentPageIndex('1')
        switch(this.props.lang){
            case "Sinhala":
                this.setState({
                    Register:'ලියාපදිංචි වන්න',
                    Step01:'පියවර 01 : ඔබේ ජාතික හැඳුනුම්පත ඇතුළත් කරන්න',
                    Step02:'පියවර 02 : ඔබේ ඇඟිලි සලකුණු සමඟ',
                    placeFinger:'කරුණාකර ඔබේ ඇඟිල්ල ස්කෑනරයේ තබන්න',
                    submitBtnTitle:'ඉදිරිපත් කරන්න',
                    notValid:'..ඔබේ ජාතික හැඳුනුම්පත වලංගු නොවේ..'
                })
                break

            case "Tamil":
                this.setState({
                    Register:'பதிவு',
                    Step01:'படி 01 : தேசிய அடையாளட்டை இலக்கத்தை உள்ளிடவும்',
                    Step02:'படி 02 : உங்கள் கைரேகை உடன்',
                    placeFinger:'தயவு செய்து உஙகள் விரலை பரிசோதிப்பானில் வைக்கவும்',
                    submitBtnTitle:'சமர்ப்பிக்க',
                    notValid:'..உங்கள் தேசிய அடையாளட்டை செல்லுபடியற்றது..'
                })
                break
            default :return
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const NICnumber=this.state.nic

        Api.get("/vote/userByNic/"+NICnumber).then(
            response=>{
                let id=response.data.id
                if(id){
                    console.log("data is present")
                    this.setState({
                        userEligiblity:true,
                        errorMessage:true
                    })
                }else{
                    this.setState({
                        errorMessage:true
                    })
                }
            }
        ).catch(()=>{
            this.setState({
                errorMessage:true
            })
        })

    }


    handleInput=(e)=>{
       this.setState({
           nic:e.target.value,
           errorMessage:false
       })
    }

    renderStep01=()=>{
        return(
            <div className="step01">
                <div className="titleBlock">
                    <p className="register-title">{this.state.Register}</p>
                    <p className="register-step">{this.state.Step01}</p>
                </div>

                <div className="register-input">
                    <div className="register-form-container">
                        <form className="register-form">
                            <CustomInput label ="NIC NO " handleInput={this.handleInput}/>
                        </form>

                        <div className="register-submit-container">
                            <button className="register-submit" onClick={this.handleSubmit}>{this.state.submitBtnTitle}</button>
                        </div>
                    </div>
                </div>

                <div className="validateErrorMessageBlock">
                    {
                        this.state.errorMessage ? <p className="validateErrorMessage">{this.state.notValid}</p> :null
                    }
                </div>
            </div>
        )
    }

    renderStep02=()=>{
        return(
            <div className="step02">
                <div className="titleBlock">
                    <p className="register-title">{this.state.Register}</p>
                    <p className="register-step">{this.state.Step02}</p>
                </div>

                <div className="fingerprintBlock">
                    <div className="fingerprint-Image-container">
                        <img src={fingerprint} alt="finger print" className="fingerprint-Image"/>
                    </div>
                    <div className="fingerprint-message-container">
                        <p className="fingerprint-message">{this.state.placeFinger}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="register">
                {
                    this.state.userEligiblity ? this.renderStep02() : this.renderStep01() 
                }
            </div>
        )
    }
}


const mapStateToProps=({currPage:{currIndex},language:{lang}})=>{
    return{
        currIndex,
        lang
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setCurrentPageIndex:index=>dispatch(setCurrentPageIndex(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)