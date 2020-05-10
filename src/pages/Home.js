import React from 'react'
import '../css/MainPages/home.css'
import CustomButton from '../components/custom/CustomButton'

import {connect} from 'react-redux'

import {setLanguage} from '../components/redux/actions/LanguageAction'

const Home = ({lang,setLanguage,history}) => {

    const handleBtnTab=(e)=>{
        setLanguage(e)
        history.push('/register')
    }
    
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content">
                    <p className="language-selection">Select Your language</p>

                     <div className="home-content-btn">
                        <CustomButton btnTitle="Sinhala" handleBtnTab={handleBtnTab}/>
                     </div>

                     <div className="home-content-btn">
                        <CustomButton btnTitle="Tamil" handleBtnTab={handleBtnTab}/>
                    </div>

                    <div className="home-content-btn">
                        <CustomButton btnTitle="English" handleBtnTab={handleBtnTab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=({language:{lang}})=>{
    return{
        lang
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setLanguage:lang=>dispatch(setLanguage(lang))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
