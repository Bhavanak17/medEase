import { requestConstants, responseConstants } from "../actions/constants";

const initstate = {
    loading: false,
    responses: [],
    error: null
};

export default (state = initstate, action) => {
    switch(action.type){
        case responseConstants.GET_ALL_RESPONSE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        
            case responseConstants.GET_ALL_RESPONSE_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    responses: action.payload.responses
                }
                break;

            case responseConstants.GET_ALL_RESPONSE_FAILURE:
                state = {
                    ...state,
                    loading: false

                }
                break;
    }
    return state;
}