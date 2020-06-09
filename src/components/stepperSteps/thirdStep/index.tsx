import React from 'react'
import RadioButton from './radioButton'
import {GreenButtonTypeOnClick} from '../greenButton'
import AddNewBTCAddress from './addNewBTCAddress';
import Otp from './Otp';
import AnotherWallet from './anotherWallet';
import { useSelector } from "react-redux";
import StepInstruction from '../commonComponent/stepInstruction';
// import ShowPaymentMode from './showPaymentMode';




export default function ThirdStep() {
  

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [radiovalue, setRadioValue] = React.useState('');
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const { showOTP } = useSelector(
    (state: any) => state.showComponentReducer
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };
  
  const onClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (value === 'another') {
      setHelperText('You got it!');
      setError(false);
      setRadioValue('another')
    } else if (value === 'xcoin') {
      setRadioValue('xcoin')
    } else {
      // setError(true);
    }
  };
  return (
    <>
    <StepInstruction ins = 'Please select where the coins get sent' />
      {(showOTP)?<Otp />:
      (value === 'another')?
      <>
      <RadioButton another = "another" xcoin = "xcoin" XcoinsWallet = "Xcoins Wallet" AnotherWallet = "Another Wallet" error = {error} handleRadioChange = {handleRadioChange} helperText = {helperText} value = {value} label = "Choose method"/>
      <AnotherWallet />
      </>:(radiovalue === '') ?
    <div>
        <RadioButton another = "another" xcoin = "xcoin" XcoinsWallet = "Xcoins Wallet" AnotherWallet = "Another Wallet" error = {error} handleRadioChange = {handleRadioChange} helperText = {helperText} value = {value} label = "Choose method"/>
        <GreenButtonTypeOnClick text = 'CONFIRM & CONTINUE'onClick={onClick}/>
        
        
        </div> :(radiovalue === 'xcoin') ? 
      <div>
      <RadioButton another = {"9786"} xcoin = {"9785"} XcoinsWallet = "BTC-9785" AnotherWallet = "BTC-9786" error = {error} handleRadioChange = {handleRadioChange} helperText = {helperText} value = {value} label = "Choose saved adress:"/>
      <AddNewBTCAddress />
    </div>
      :<div>
      <RadioButton another = {"9786"} xcoin = {"9785"} XcoinsWallet = "BTC-9785" AnotherWallet = "BTC-9786" error = {error} handleRadioChange = {handleRadioChange} helperText = {helperText} value = {value} label = "Choose saved adress:"/>
      <AddNewBTCAddress />
      </div>
      }
      </>
  )
}
