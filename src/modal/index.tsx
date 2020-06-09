class signInModal {
    email: string = "";
    password: string = "";
  }
  class uploadDoc {
    firstDoc: any = '';
    secondDoc:any = '';
    thirdDoc: any = "";
    docNumber: any = "";
    isTandC: boolean = false;
    furl:any = '';
    surl:any = '';
    turl:any = '';
  }
  class ReducersModal {
    uploadFileReducer: uploadDoc = new uploadDoc();
  }
  class step  {
    activeStep: Number = 0;
    statusOfFirstStep:boolean = false;
    statusOfSecondStep:boolean = false;
    statusOfThirdStep:boolean = false;
    statusOfFourthStep:boolean = false;
    
  }
  class exchangeMoney {
    send: number = 1;
    receive: number = 0.0000234;
    timmer: boolean = false;
  }

  class BTCAddress  {
    BTCAddressValue: string = "";
    BTCName: string = "";
  }
  class OTPModel {
    OTP: any
  }

  class SEPAData {
    beneficiary: string = "";
    address: string = "";
    city: string = "";
    country: string = "";
    iban: string = "";
    reference: string = "";
    receivingBank: string = "";
    address1: string = "";
    city1: string = "";
    country1: string = "";
  }

  class showComponent {
    showOTP: boolean = false;
    showPaymentForm: boolean = false;
  }

  export {
    signInModal,
    uploadDoc,
    ReducersModal,
    step,
    exchangeMoney,
    BTCAddress,
    SEPAData,
    showComponent,
    OTPModel
  }