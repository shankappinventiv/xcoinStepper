import React from 'react'
import UploadButton from './uploadButton'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { useSelector,useDispatch } from "react-redux";
import {ReducersModal} from '../../../modal'
import KYCInstruction from './KYCInstruction';
import ChooseMethod from './chooseMethod';
import InputField from '../../inputs/InputField';
import { Formik, Form } from "formik";
import {GreenButton} from '../greenButton'
import Schema from '../../../schema'


const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{},
        docNo:{
          marginTop: 20,
        }
    }))


export default function KYCFunnel() {
    const classes = styles();
    const dispatch = useDispatch();  
    const { firstDoc, secondDoc, thirdDoc, docNumber, isTandC,furl,surl,turl} = useSelector(
        (state: ReducersModal) => state.uploadFileReducer
      );
      const onSubmit = (value:any) =>{
        dispatch({type:'activeStep', payload: {activeStep: 1, statusOfFirstStep:true}})
      }
      
    
      
    return (
      
        <div className = {classes.container}>
            <KYCInstruction />
            <ChooseMethod />
            <Formik
            initialValues={{
                docNumber: docNumber,
                isTandC: isTandC,
                firstDoc:firstDoc.name,
                secondDoc:secondDoc.name,
                thirdDoc:thirdDoc.name
            }}
            validationSchema={Schema.uploadDocSchema()}
            onSubmit={(values) => {
              onSubmit(values);
              // console.log(values);
            }}
            
            >
               {/* <span>{.docNumber}</span> */}
             
              {({ errors, touched, isSubmitting,setFieldError, setFieldValue}) => (
              <Form className = {classes.docNo}>
                <React.Fragment>
                <UploadButton
                label = {'Driving license front photo * '}
                 id = "firstDoc"
                 doc = {firstDoc}
                 name = "firstDoc"
                 touched={touched}
                 errors={errors}
                 url = {furl}
                 setFieldValue = {setFieldValue}
                //  error = {"requair"}
                />
                <UploadButton 
                label = {"Driving license back photo * "}
                id = "secondDoc" doc = {secondDoc} name = 'secondDoc'
                 touched={touched}
                 errors={errors}
                 url = {surl}
                 setFieldValue = {setFieldValue}
                 />
                <UploadButton
                label = 'Selfie holding ID doc and note *'
                id = "thirdDoc" doc = {thirdDoc} name = 'thirdDoc'
                 touched={touched}
                 errors={errors}
                 url = {turl}
                 setFieldValue = {setFieldValue}
                />
                  <InputField
                    label={"Driving licence number"}
                    placeHolder={"Enter your document Number"}
                    // id={"docNumber"}
                    name={"docNumber"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                    <GreenButton
                      text={"UPLOAD FILE"}
                      onPress={() => console.log("Submit")}
                      isFacebookBtn={false}
                      isSubmitting={isSubmitting}
                    />
                </React.Fragment>
              </Form>
                )}
                </Formik>
        </div>
    )
}
