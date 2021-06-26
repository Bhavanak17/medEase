import { requestConstants } from "./constants";
import axios from "../helpers/axios";

export const getAllRequest = () =>{
return async dispatch => {
    dispatch({type: requestConstants.GET_ALL_REQUEST_REQUEST});
    const res = await axios.get("/query/get");
    console.log(res);
    if(res.status === 201){
        const {queryList} = res.data;
        dispatch({
            type: requestConstants.GET_ALL_REQUEST_SUCCESS,
            payload:{
                queries: queryList
            }
        });

    }
    else{
        if(res.status === 400){
            dispatch({
                type: requestConstants.GET_ALL_REQUEST_FAILURE,
                payload: {error: res.data.error}
            });
        }
    }
}
}

// export const sendResponse = (queryName) => {
//     return async (dispatch) => {
//         dispatch({type: responseConstants.SEND_RESPONSE_REQUEST});
//         const res = await axios.post("response/post", {
//             ...queryName,
//         });

//         if(res.status === 201) {
//             const {queryName} = res.data;
//             dispatch({
//                 type: responseConstants.SEND_RESPONSE_SUCCESS,
//                 payload: {queryName}
//             });
//         }
//         else{
//             if(res.status === 400){
//                 dispatch({
//                     type: responseConstants.SEND_RESPONSE_FAILURE,
//                     payload: {
//                         error: res.data.error
//                     }
//                 });
//             }
//         }
//     }
// }
