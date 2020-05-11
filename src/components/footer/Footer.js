import React from 'react'

import '../../css/footer/footer.css'
import current from '../../assets/current.png'
import nonCurrent from '../../assets/nonCurrent.png'

import electionSymbol from '../../assets/electionSymbol.png'

import {connect} from 'react-redux'

const Footer = ({currIndex}) => {

    const renderFooterIndicator=()=>{
        const arr=[0,1,2,3,4]
        return(
            <div className="footer-pageIndicator-container">
                {
                    arr.map((value,index)=>{
                        return(
                            currIndex===value.toString() ? <img src={current} alt="curr Symbol" className="footer-indicator" key={index}/> 
                            :<img src={nonCurrent} alt="curr Symbol" className="footer-indicator"  key={index}/>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={electionSymbol} alt="election Symbol" className="footer-logo"/>
            </div>
            {
                renderFooterIndicator()
            }
        </div>
    )
}

const mapStateToProps=({currPage:{currIndex}})=>{
    return{
        currIndex
    }
}

export default connect(mapStateToProps)(Footer)
