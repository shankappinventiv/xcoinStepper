import {uploadDoc,step, exchangeMoney} from '../../../modal'
// import {firstDoc,secondDoc,thirdDoc} from '../../../utils/constant'


export const uploadFileReducer = (state:uploadDoc =new uploadDoc() ,action:any) =>{
    // debugger
    switch (action.type) {
        case "firstDoc":
          return {...state,...action.payload};
        case "secondDoc":
            return {...state,...action.payload};
        case "thirdDoc":
            return {...state,...action.payload};
        default:
          return state;
      }
}

export const stepReducer = (state:step = new step(), action:any) =>{
    switch (action.type) {
        
        case "activeStep":
            return {...state,...action.payload};
        case "activstepthree":
            return {...state,...action.payload}
            default:
        return state;
      }
}

export const moneyExchangeReducer = (state:exchangeMoney = new exchangeMoney(), action:any) => {
    switch (action.type) {
        
        case "updateExchangeMoney":
            return {...state,...action.payload};
            default:
        return state;
      }
}
 