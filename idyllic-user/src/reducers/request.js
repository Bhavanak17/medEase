import { requestConstants } from "../actions/constants";

const initState = {
    loading: false,
    query: {
        queryName: ""
    },
    error: null
};

export default (state = initState, action)=> {
    switch(action.type){
        case requestConstants.ADD_REQUEST_REQUEST:
            state= {
                ...state,
                loading: true
            }
            break;
        case requestConstants.ADD_REQUEST_SUCCESS:
            
            state = {
                ...state,
                query: action.payload.query,
                loading: false
            }
            break;
        case requestConstants.ADD_REQUEST_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;
}