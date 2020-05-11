const INITIAL_STATE={
    currIndex:'0'
}

const currentPageRuducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CURRENT_PAGE_INDEX":
            return{
                ...state,
                currIndex:action.payload
            }
        default : return state
    }
}

export default currentPageRuducer