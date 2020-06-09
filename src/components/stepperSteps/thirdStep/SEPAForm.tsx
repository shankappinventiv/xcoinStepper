import React from 'react'
import InputFieldSEPA from './InputFieldSEPA';
import { Formik, Form } from "formik";
import Schema from '../../../schema'
// import {SEPADataReducers} from '../../../modal'
import { useSelector,useDispatch } from "react-redux";
import {GreenButton} from '../greenButton'


export default function SEPAForm() {
    const {  beneficiary, address,city,country, iban,reference,receivingBank,address1,city1,country1} = useSelector(
        (state: any) => state.SEPADataReducers
      );
    const dispatch  = useDispatch()
      const onSubmit = (value:any) =>{
        console.log(value,"valueueueu")
        dispatch({type:'updateFormData', payload:value})
        dispatch({type: 'activeStep', payload:{activeStep:4,statusOfFourthStep:true}})
    }
  
    return (
        <div>
            <Formik
            initialValues={{
                beneficiary,
                address,
                city,
                country,
                iban,
                reference,
                receivingBank,
                address1,
                city1,
                country1
            }}
            validationSchema={Schema.SEPAFormSchema()}
            onSubmit={(values) => {
              // alert(values);
              onSubmit(values);
            }}
            >
              {({ errors, touched, isSubmitting}) => (
              <Form >
                <React.Fragment>
                  <InputFieldSEPA
                    label={"Beneficiary:"}
                    placeHolder={"Enter your Beneficiary"}
                    id={"beneficiary"}
                    name={"beneficiary"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Address:"}
                    placeHolder={"Enter your Address"}
                    id={"address"}
                    name={"address"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"City:"}
                    placeHolder={"Enter your City:"}
                    id={"city"}
                    name={"city"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Country:"}
                    placeHolder={"Enter your Country Name"}
                    id={"country"}
                    name={"country"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"IBAN: "}
                    placeHolder={"Enter your IBAN"}
                    id={"iban"}
                    name={"iban"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Reference: "}
                    placeHolder={"Enter your Reference"}
                    id={"reference"}
                    name={"reference"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Receiving Bank:"}
                    placeHolder={"Enter your Receiving Bank:"}
                    id={"receivingBank:"}
                    name={"receivingBank"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Address:"}
                    placeHolder={"Enter your Address"}
                    id={"address1"}
                    name={"address1"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"City"}
                    placeHolder={"Enter your City Name"}
                    id={"city1"}
                    name={"city1"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                  <InputFieldSEPA
                    label={"Country:"}
                    placeHolder={"Enter your Country Name"}
                    id={"country1"}
                    name={"country1"}
                    type={"text"}
                    touched={touched}
                    errors={errors}
                  />
                    <GreenButton
                      text={"CONFIRM & CONTINUE"}
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
