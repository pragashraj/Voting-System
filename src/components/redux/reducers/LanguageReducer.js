const INITIAL_STATE={
    lang:"English"
}

const languageReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_LANGUAGE":
            return{
                ...state,
                lang:action.payload
            }
        default :return state
    }
}

export default languageReducer