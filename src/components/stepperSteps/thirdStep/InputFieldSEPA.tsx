import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import Button from '@material-ui/core/Button';


// interface Props {
//   label: string;
//   placeHolder: string;
//   id: string;
//   name: string;
//   type: string;
//   errorText?: string;
//   touched?: { email: ""; password: "" };
//   errors?: { email: ""; password: "" };
// }

const styles = makeStyles((theme: Theme) =>
  createStyles({
    formLabel: {
      fontSize: "16px",
      lineHeight: "1.63",
      marginBottom: "0",
      paddingLeft: "8px",
      opacity: "0.5",
      color: "var(--blue-grey)",
      fontFamily: `"Nunito Sans", sans-serif`,
    },
    required: {
      color: "red",
    },
    margin: {
      margin: theme.spacing(1),
    //   display: 'flex',
    },
    textField: {
      height: "50px",
      fontSize: "14px",
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(0, 156, 222, 0.05)",
      padding: "12px 20px",
      borderColor: "transparent",
      boxShadow: "none",
      transition: "all 0.3s ease",
      // fontSize: "18px",
      lineHeight: "1.78",
      color: "#637696",

    //   marginBottom: "1rem",
      border: "1px solid rgba(0, 156, 222, 0.3)",
      "&:active": {
        // boxShadow: "0 0 15px 0 rgba(0, 156, 222, 0.2)",
        // border: "1px solid rgba(0, 156, 222, 0.3)",
        // backgroundColor: "#ffffff !important",
      },
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        boxShadow: "0 0 15px 0 rgba(0, 156, 222, 0.2)",
        border: "1px solid rgba(0, 156, 222, 0.3)",
        backgroundColor: "#ffffff !important",
      },
    },
    errorMessage: {
      color: "#d0021b",
      opacity: "0.5",
      fontSize: "16px",
      marginTop: 15,
    },
    errorClass: {
      borderRadius: "10px",
      boxShadow: "0 0 15px 0 rgba(208, 2, 27, 0.2)",
      border: "solid 1px rgba(208, 2, 27, 0.3)",
      backgroundColor: "#ffffff !important",
      "&::placeholder": {
        color: "#d0021b",
      },
      "&:hover": {
        boxShadow: "0 0 15px 0 rgba(208, 2, 27, 0.2)",
        border: "solid 1px rgba(208, 2, 27, 0.3)",
        backgroundColor: "#ffffff !important",
      },
    },
    settingClass: {
      width: "60% !important",
    },
    inpWithButton:{
        display: "flex",
    },
    btnCopy:{
        borderTopRightRadius: '10px !important',
        borderBottomRightRadius: '10px !important',
        border: 'solid 1px #cadce4',
        backgroundColor: '#ffffff !important',
        marginLeft: -10,

    }
  })
);

export default function InputFieldSEPA({
  label,
  placeHolder,
  id,
  name,
  type,
  touched,
  errors,
  value,
  disabled = false,
  isSettingScreen = false,
}: any) {
  const classes = styles();
  // console.log(touched, 'touched')


  return (
    <FormGroup>
      <FormLabel className={classes.formLabel}>
        {label}
        <span className={classes.required}>*</span>
      </FormLabel>
      <FormControl className={classes.margin} required component="fieldset">
          <div className = {classes.inpWithButton}>
        <Field
          className={`${classes.textField} ${
            errors[name] && touched[name] ? classes.errorClass : ""
          } ${isSettingScreen ? classes.settingClass : ""} `}
          name={name}
          type={type}
          id={id}
          placeholder={placeHolder}
          defaultValue={value}
          // value={value}
          disabled={disabled}
        />
        <Button className = {classes.btnCopy}>Copy</Button>
        </div>
        {errors[name] && touched[name]? (
          <ErrorMessage
            name={name}
            component="div"
            className={classes.errorMessage}
          />
        ) : null}
      </FormControl>
    </FormGroup>
  );
}
