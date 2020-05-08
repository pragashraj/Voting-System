import React from 'react'

import '../../css/footer/footer.css'
import current from '../../assets/current.png'
import nonCurrent from '../../assets/nonCurrent.png'

import electionSymbol from '../../assets/electionSymbol.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={electionSymbol} alt="election Symbol" className="footer-logo"/>
            </div>
            <div className="footer-pageIndicator-container">
                <img src={current} alt="curr Symbol" className="footer-indicator"/>
                <img src={nonCurrent} alt="curr Symbol" className="footer-indicator"/>
                <img src={nonCurrent} alt="curr Symbol" className="footer-indicator"/>
                <img src={nonCurrent} alt="curr Symbol" className="footer-indicator"/>
                <img src={nonCurrent} alt="curr Symbol" className="footer-indicator"/>
            </div>
        </div>
    )
}

export default Footer
