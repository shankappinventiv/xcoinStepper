import React from 'react'
import InputField from '../../inputs/InputField';
import { Formik, Form } from "formik";
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Schema from '../../../schema'
import { BTCAddress } from '../../../modal';
import {GreenButton} from '../greenButton';
import {useDispatch } from "react-redux";

const styles = makeStyles((theme:Theme) =>
    createStyles({
        docNo:{},
    }))

export default function AnotherWallet() {
    const classes = styles()
    const dispatch = useDispatch();
    // const { showOTP, showPaymentForm } = useSelector(
    //     (state: any) => state.showComponentReducer
    //   );
    const onSubmit = (value:any) => {
        // console.log(showOTP)
        dispatch({type:'showOtp', payload:{showOTP:true}})
    }

    const {BTCAddressValue} = new BTCAddress();

    return (
        <div>
            <Formik
            initialValues={{
                BTCAddress: BTCAddressValue,
            }}
            validationSchema={Schema.BTCAddressAnother()}
            onSubmit={(values) => {
              onSubmit(values);
            }}
            >
              {({ errors, touched, isSubmitting}) => (
              <Form className = {classes.docNo}>
                <React.Fragment>
                  <InputField
                    label={"BTC address"}
                    placeHolder={"Enter your BTC address"}
                    id={"BTCAddress"}
                    name={"BTCAddress"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <GreenButton text="CONFIRM & CONTINUE" />
                </React.Fragment>
              </Form>
              
                )}
                </Formik>
        </div>
    )
}
