import {SEPAData, showComponent,OTPModel} from '../../../modal'

export const SEPADataReducers = (state: SEPAData = new SEPAData(), action:any) =>{
    switch (action.type) {
        case "updateFormData":
          return {...state,...action.payload};
        default:
          return state;
      }
}

export const showComponentReducer = (state:showComponent = new showComponent(), action:any) =>{
  switch (action.type) {
    case "showOtp":
      return {...state,...action.payload};
    case "showPaymentForm":
      return {...state,...action.payload};
    default:
      return state;
  }
}
export const OTPReducer = (state:OTPModel = new OTPModel(), action:any) =>{
  switch (action.type) {
    case "otp":
      return {...state,...action.payload};
    default:
      return state;
  }
}