import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
//@ts-ignore
import OtpInput from 'react-otp-input';
import {GreenButtonTypeOnClick} from '../greenButton';
import {useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            display: 'flex',
            '& div':{
                width: '100%',
                '& div':{
                    margin: 10,
                    flex: '1',
                    '& input':{
                        padding: '20px 0px',
                        height: '100px',
                        width: '90% !important' ,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(23,143,201,0.05)',
                        border: 'none',
                        outline: 'none',
                        fontSize: 36,
                        color: 'black',
                    }
                   
                }
            }
            
        },
        label:{
            opacity: 0.5,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: '1.63',
            color: '#637696',
            marginTop: 20,
        },
    }))
export default function Otp() {
    const classes = styles()
    const dispatch = useDispatch()
    const [OTP, otpValue] = React.useState(NaN);
    const setOtp = (otp:any) =>{
        otpValue(otp)
    }
    const  onClick = () =>{
        if(OTP >= 100000 && OTP <= 999999){
        dispatch({type: 'activeStep', payload:{activeStep:3, statusOfThirdStep: true}})
        dispatch({type: 'otp', payload:{OTP: OTP}})
        } else {
            toast.error("Enter valid OTP")
        }
    }
    // console.log(OTP)
    return (
        <>
        <div className={classes.label}>Google Authentication Code</div>
        <div className = {classes.container}>
        <OtpInput
          onChange={(otp:any) =>setOtp(otp)}
          numInputs={6}
          separator={<span></span>}
        />
     </div> 
     <GreenButtonTypeOnClick text = 'SEND OTP' onClick={onClick}/>
     <ToastContainer />
     </>
    )
}
