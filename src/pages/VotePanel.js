import React,{useEffect} from 'react'

import '../css/MainPages/votePanel.css'

import {connect} from 'react-redux'
import {setCurrentPageIndex} from '../components/redux/actions/currentPageAction'

const VotePanel = ({setCurrentPageIndex}) => {

    useEffect(()=>{
        setCurrentPageIndex('4')
    })

    return (
        <div className="vote-panel">
            <div className="vote-panel-container">
                <fieldset className="vote-panel-field">

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


export default connect(null,mapDispatchToProps)(VotePanel)
