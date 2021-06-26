import { requestConstants } from "./constants";
import axios from "../helpers/axios";

export const addRequest = (form) => {
    return async dispatch => {
        dispatch({type: requestConstants.ADD_REQUEST_REQUEST});
        try{
            const res = await axios.post(`/query/post`, form);
            console.log(res.data);
            if(res.status === 201){
                dispatch({
                    type: requestConstants.ADD_REQUEST_SUCCESS,
                    payload: {query: res.data.query}
                });
                return true;
            }
            else{
                dispatch({
                    type: requestConstants.ADD_REQUEST_FAILURE,
                    payload: {error: res.data.error}
                });
            }
        
        } catch(error){
            console.log(error.response);
        }
    }
}