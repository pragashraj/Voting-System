import React from 'react'
import '../../css/footer/footer.css'

import electionSymbol from '../../assets/electionSymbol.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={electionSymbol} alt="election Symbol" className="footer-logo"/>
            </div>
        </div>
    )
}

export default Footer
