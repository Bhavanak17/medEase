import { requestConstants, responseConstants } from "./constants";
import axios from "../helpers/axios";

export const getAllResponse = () =>{
return async dispatch => {
    dispatch({type: responseConstants.GET_ALL_RESPONSE_REQUEST});
    const res = await axios.get("/response/get");
    console.log(res);
    if(res.status === 201){
        const {responseList} = res.data;
        dispatch({
            type: responseConstants.GET_ALL_RESPONSE_SUCCESS,
            payload:{
                responses: responseList
            }
        });

    }
    else{
        if(res.status === 400){
            dispatch({
                type: responseConstants.GET_ALL_RESPONSE_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}
}

