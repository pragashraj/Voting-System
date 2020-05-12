import React ,{useEffect} from 'react'
import {connect} from 'react-redux'

import {setCurrentPageIndex} from '../components/redux/actions/currentPageAction'
import '../css/MainPages/candidateView.css'
// import arrowDown from '../assets/arrowDown.png'

import Candidate from '../components/custom/Candidate'


const CandidatesView = ({setCurrentPageIndex}) => {

    useEffect(()=>{
        setCurrentPageIndex('3')
    })

    return (
        <div className="candidates-view">
            <div className="candidates-header">
                <p className="candidates-title">Candidates</p>
            </div>
            <div className="candidates-list-container">
                <div className="singleCandidate">
                    <Candidate/>
                </div>
                <div className="singleCandidate">
                    <Candidate/>
                </div>
            </div>
            <div className="howToVote-container">
                <fieldset className="howToVote-field">
                    <div className="howToVote-content">
                        <p className="howToVote-title">How To Vote </p>
                    </div>
                </fieldset>
            </div>
        </div>
    )

}

const mapDispatchToProps=dispatch=>{
    return{
        setCurrentPageIndex:index=>dispatch(setCurrentPageIndex(index))
    }
}


export default connect(null,mapDispatchToProps)(CandidatesView)
