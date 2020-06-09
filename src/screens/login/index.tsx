import React from 'react'
import Schema from "../../schema";
import { onSubmit } from "./action";
import { signInModal } from "../../modal";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import InputField from "../../components/inputs/InputField";
import { Theme, makeStyles, createStyles } from "@material-ui/core";
import GreenButton from "../../components/button/greenButton";
// import { ReCaptcha, loadReCaptcha } from "react-recaptcha-google";


const styles = makeStyles((theme: Theme) =>
  createStyles({
      container:{
        width: 500,
        margin: '150px auto',
      }

  
  }))

function Login() {
    const classes = styles();
      const dispatch = useDispatch();
    const { email, password } = new signInModal();

    return (
      <div className = {classes.container}>
        <Formik
        initialValues={{
          email: email,
          password: password,
        }}
        validationSchema={Schema.LoginSchema()}
        onSubmit={(values) => {
          // alert(values);
          dispatch(onSubmit(values));
        }}
      > 
        {({ errors, touched, isSubmitting}) => (
          <Form>
            <React.Fragment>
              <InputField
                label={"YOUR EMAIL ADDRESS"}
                placeHolder={"Enter your email"}
                id={"email"}
                name={"email"}
                type={"email"}
                touched={touched}
                errors={errors}
              />
              <InputField
                label={"PASSWORD"}
                placeHolder={"Enter your password"}
                id={"password"}
                name={"password"}
                type={"password"}
                touched={touched}
                errors={errors}
              />
                <GreenButton
                  text={"CONTINUE"}
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

export default Login
