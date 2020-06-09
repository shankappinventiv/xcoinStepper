import { combineReducers } from "redux";
import counterReducer from "../screens/signUp/reducer"
import loginReducers from "../screens/login/reducers"
import {uploadFileReducer, stepReducer,moneyExchangeReducer,} from "../components/stepperSteps/firststep/reducer"
import {SEPADataReducers,showComponentReducer,OTPReducer} from "../components/stepperSteps/thirdStep/reducer"

/**
 * combine all reducer into single root reducer
 */
const rootReducer = combineReducers({
    counterReducer,
    loginReducers,
    uploadFileReducer,
    stepReducer,
    SEPADataReducers,
    moneyExchangeReducer,
    showComponentReducer,
    OTPReducer
});

export default rootReducer;
