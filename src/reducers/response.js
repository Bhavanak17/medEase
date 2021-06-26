import { responseConstants } from "../actions/constants";

const initstate = {
    response: {
        queryName: ""
    },
    loading: false,
    error: null
};

export default (state = initstate, action) => {
    console.log(action);
    switch(action.type){
        case responseConstants.SEND_RESPONSE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        
        case responseConstants.SEND_RESPONSE_SUCCESS:
            state = {
                ...state,
                response: action.payload.queryName,
                loading: false

            }
            break;

        case responseConstants.SEND_RESPONSE_FAILURE:
            state = {
                ...state,
                loading: false
            }
    }
    return state;
}