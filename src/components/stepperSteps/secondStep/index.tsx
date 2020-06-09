import React from 'react'
import {useDispatch } from "react-redux"
import DropDown from './dropDown'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import {GreenButton} from '../greenButton';
import { Formik, Form } from "formik";
import {exchangeMoney} from "../../../modal"
import Schema from '../../../schema'
import StepInstruction from '../commonComponent/stepInstruction';



const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
        }
    }))

    export default function Index() {
    const classes = styles();
    const {send, receive} = new exchangeMoney();
    const dispatch = useDispatch(); 
    const onSubmit = (values:any) =>{
        dispatch({type:'updateExchangeMoney', payload: {...values, timmer: true}})
        dispatch({type:'activstepthree', payload: {activeStep: 2,statusOfSecondStep: true}})
    }
    return (
        <>
        <StepInstruction ins = 'Please check amount and confirm your order' />
        <Formik
            initialValues={{
                send,
                receive
            }}
            validationSchema={Schema.moneyExchangeSchema()}
            onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {({ errors, touched, isSubmitting}) => (
              <Form>
                  
        <div className = {classes.container}>
            <DropDown name = "send" id = "send" errors={errors}/> <SyncAltIcon />
            <DropDown name = {"receive"} id = {"receive"} errors={errors}/>
        </div>
        <GreenButton text = {"CONFIRM & CONTINUE"}/>
        </Form>
        )}
        </Formik>
        </>
    )
}


