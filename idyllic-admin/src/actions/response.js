import axios from "../helpers/axios";
import { responseConstants } from "./constants";

export const sendResponse = (query) => {
    return async (dispatch) => {
        dispatch({type: responseConstants.SEND_RESPONSE_REQUEST});
        const res = await axios.post("/response/post", {
            ...query,
        });
        console.log(res.data);

        if(res.status === 201) {
            
            dispatch({
                type: responseConstants.SEND_RESPONSE_SUCCESS,
                payload: {queryName: res.data.queryName}
            });
        }
        else{
            if(res.status === 400){
                dispatch({
                    type: responseConstants.SEND_RESPONSE_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }
        }
    }
}
