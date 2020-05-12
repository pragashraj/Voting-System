import React from 'react'

import '../../css/custom/candidate.css'
import candidate from '../../assets/candidate.png'
import partySymbol from '../../assets/partySymbol.png'
import arrow from '../../assets/arrow.png'

const Candidate = () => {
    return (
        <div className="candidate">
            <div className="candidate-image-container">
                <img src={candidate} alt="candidateImage" className="candidate-image"/>
            </div>
            <div className="candidate-name-container">
                <p className="candidate-name">Candidate 01</p>
            </div>
            <div className="candidate-party-container">
                <img src={partySymbol} alt="party" className="candidate-party-image"/>
                <p className="candidate-party-title">Party 01</p>
            </div>
            <div className="candidate-detail-container">
                <p className="candidate-detail">Details</p>
                <img src={arrow} alt="arrow" className="candidate-Moredetail-image"/>
            </div>
        </div>
    )
}

export default Candidate
