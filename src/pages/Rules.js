import React ,{useEffect}from 'react'
import {connect} from 'react-redux'

import '../css/MainPages/rules.css'
import {setCurrentPageIndex} from '../components/redux/actions/currentPageAction'

import next from '../assets/images/next.png'

const Rules = ({setCurrentPageIndex,history}) => {

    useEffect(()=>{
        setCurrentPageIndex('2')
    })

    return (
        <div  className="rules">
            <div className="rules-container">
                <div className="rules-title-block">
                    <p className="rules-title">Rules & Regulations</p>
                </div>
                <div className="rules-content-block">
                    <fieldset className="rules-content-container01">
                        <div className="rules-content"></div>                       
                    </fieldset>
                    <fieldset className="rules-content-container02">
                        <div className="rules-content"></div>                       
                    </fieldset>
                    <div className="next-btn-container">
                        <button className="next-btn" onClick={()=>history.push('/candidateView')}>
                            <p className="next-btn-title"> Next</p>
                            <img src={next} alt ="next-btn" className="next-btn-image"/>
                        </button>
                        
                    </div>    
                </div>
               
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        setCurrentPageIndex:index=>dispatch(setCurrentPageIndex(index))
    }
}

export default connect(null,mapDispatchToProps)(Rules)
