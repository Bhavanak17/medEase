import { requestConstants } from "../actions/constants";

const initstate = {
    loading: false,
    queries: [],
    error: null
};

export default (state = initstate, action) => {
    switch(action.type){
        case requestConstants.GET_ALL_REQUEST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        
            case requestConstants.GET_ALL_REQUEST_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    queries: action.payload.queries
                }
                break;

            case requestConstants.GET_ALL_REQUEST_FAILURE:
                state = {
                    ...state,
                    loading: false

                }
                break;
    }
    return state;
}