import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import InputField from '../../inputs/InputField';
import { Formik, Form } from "formik";
import Schema from '../../../schema'
import { BTCAddress } from '../../../modal';
import {GreenButton} from '../greenButton';
import {useDispatch } from "react-redux";


const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            
        },
        newAddress:{
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: "#009cde",
            cursor: 'pointer',
        },
        docNo:{
            marginTop: 20,
        }
    }))

export default function AddNewBTCAddress(props:any) {
    const classes = styles();
    const {BTCAddressValue, BTCName} = new BTCAddress();
    const [showForm, setShowForm] = React.useState(false);
    const dispatch = useDispatch()
    const popUpInput = () =>{
        setShowForm(true)
    };
    const onSubmit = (value:any) =>{
      dispatch({type:'showOtp', payload:{showOTP:true}})
    };


    return (
        <div className = {classes.container}>
            <div className = {classes.newAddress} onClick = {popUpInput}>+ Add new BTC address</div>
            {showForm?<Formik
            initialValues={{
                BTCAddress: BTCAddressValue,
                BTCName
            }}
            validationSchema={Schema.BTCAddress()}
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
                  <InputField
                    label={"Address Name"}
                    placeHolder={"Enter your Address Name"}
                    id={"BTCName"}
                    name={"BTCName"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <GreenButton text="CONFIRM & CONTINUE" />
                </React.Fragment>
              </Form>
                )}
                </Formik>:null}
        </div>
    )
}
