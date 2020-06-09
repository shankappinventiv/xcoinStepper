import React from 'react'
import RadioButton from './radioButton'
import {GreenButtonTypeOnClick} from '../greenButton'
// import AddNewBTCAddress from './addNewBTCAddress';
// import Otp from './Otp';
import SEPAForm from './SEPAForm';
// import TransactionStatus from '../fourthStep/transactionStatus';
// import AnotherWallet from './anotherWallet';
import { useDispatch } from "react-redux";
import StepInstruction from '../commonComponent/stepInstruction';




export default function ShowPaymentMode() {
  

  const [value, setValue] = React.useState('');
  const [valueOfCard, setValueOfCard] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
    const dispatch = useDispatch()
//   const { showOTP, showPaymentForm } = useSelector(
//     (state: any) => state.showComponentReducer
//   );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };
  const handleRadioChangeCard = (e:any) =>{
    setValueOfCard(e.target.value)
  }
  
  const onClick = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch({type: 'activeStep', payload:{activeStep:4,statusOfFourthStep:true}})
    // event.preventDefault();
    // 
    // if (value === 'another') {
    //   setHelperText('You got it!');
    //   setError(false);
    //   setRadioValue('another')
    // } else if (value === 'xcoin') {
    //   setRadioValue('xcoin')
    // } else {
    //   setError(true);
    // }
  };
  return (
    <div>
      <StepInstruction ins = 'Please choose payment method or add new' />
         <RadioButton another = "visa" xcoin = "sepa" XcoinsWallet = "Visa/Mastercard" AnotherWallet = "SEPA (Bank transfer)" error = {error} handleRadioChange = {handleRadioChange} helperText = {helperText} value = {value} label = "Choose method"/>
          {/* <GreenButtonTypeOnClick text = 'CONFIRM & CONTINUE'onClick={onClick}/> */}

          {(value === 'sepa')?
          <>
        <RadioButton another = "67981" xcoin = "56721" XcoinsWallet = "**** **** **** 6789  (VISA )" AnotherWallet = "**** **** **** 5672  (Mastercard )" error = {error} handleRadioChange = {handleRadioChangeCard} helperText = {helperText} value = {valueOfCard} label = "Choose card"/>
        <GreenButtonTypeOnClick text = 'CONFIRM & CONTINUE'onClick={onClick}/>
        </>:(value === 'visa')?
        <SEPAForm />:null
        }
      
      
  {/* <SEPAForm /> */}
  {/* <TransactionStatus /> */}
  </div>
  )
}
