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
        errorMessage:false
    }

    componentDidMount(){
        this.props.setCurrentPageIndex('1')
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
                    <p className="register-title">Register</p>
                    <p className="register-step">Step 01 : Enter Your NIC</p>
                </div>

                <div className="register-input">
                    <div className="register-form-container">
                        <form className="register-form">
                            <CustomInput label ="NIC NO " handleInput={this.handleInput}/>
                        </form>

                        <div className="register-submit-container">
                            <button className="register-submit" onClick={this.handleSubmit}>submit</button>
                        </div>
                    </div>
                </div>

                <div className="validateErrorMessageBlock">
                    {
                        this.state.errorMessage ? <p className="validateErrorMessage">......Your NIC Not Valid .......</p> :null
                    }
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
                    this.state.userEligiblity ? this.renderStep02() : this.renderStep01() 
                }
            </div>
        )
    }
}


const mapStateToProps=({currPage:{currIndex}})=>{
    return{
        currIndex
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setCurrentPageIndex:index=>dispatch(setCurrentPageIndex(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)