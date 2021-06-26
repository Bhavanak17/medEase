import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import requestReducer from "./request";
import responseReducer from "./response";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    request: requestReducer,
    response: responseReducer
});

export default rootReducer;