import {combineReducers} from 'redux'
import LanguageReducer from './LanguageReducer'
import currentPageReducer from './currentPageReducer'


export default combineReducers({
    language:LanguageReducer,
    currPage:currentPageReducer
})