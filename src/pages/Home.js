import React ,{useEffect} from 'react'
import '../css/MainPages/home.css'
import CustomButton from '../components/custom/CustomButton'

import {connect} from 'react-redux'

import {setLanguage} from '../components/redux/actions/LanguageAction'
import {setCurrentPageIndex} from '../components/redux/actions/currentPageAction'

const Home = ({setLanguage,setCurrentPageIndex,history,lang}) => {

    useEffect(()=>{
        setCurrentPageIndex('0')
    })

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
                        <CustomButton btnTitle="සිංහල" btnValue="Sinhala" handleBtnTab={handleBtnTab}/>
                     </div>

                     <div className="home-content-btn">
                        <CustomButton btnTitle="jkpo;" btnValue="Tamil" handleBtnTab={handleBtnTab}/>
                    </div>

                    <div className="home-content-btn">
                        <CustomButton btnTitle="English" btnValue="English" handleBtnTab={handleBtnTab}/>
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
        setLanguage:lang=>dispatch(setLanguage(lang)),
        setCurrentPageIndex:index=>dispatch(setCurrentPageIndex(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
