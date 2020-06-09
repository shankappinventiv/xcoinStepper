import React from 'react'
// import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UsLogo from '../../assets/us-flag.svg'
import { Field, ErrorMessage } from "formik";


const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
        },
        root:{
            display: 'flex',
            borderBottom: '1px solid #3a4e6f',
            // opacity: 0.4,
            width: '100%',
            position: 'relative',
            '& .MuiTextField-root':{
                flex:7,
            },
            '& input':{
                border: 'none',
                width: '75%',
                fontSize: 34,
                "&:focus": {
                    outline: "none",
                  },
            },
            '& .MuiInputBase-input':{
                // padding: '13px 0px',
                width: '85%',
                fontSize: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // flex:4,
                // boxSizing: 'border-box,'
            },
            '&::before':{
                content:"''",
                position: 'absolute',
                background: '#3a4e6f',
                width: '1px',
                height: '44px',
                opacity: 0.15,
                left: 186,
            },
        },
        formControl:{
            // width: '100%',
            flex: 3
        },
        select:{
            width: '100%',
        },
        errorMessage: {
            color: "#d0021b",
            opacity: "0.5",
            fontSize: "16px",
          },
    }))

function DropDown(props:any) {
    const classes = styles()

    const [age, setAge] = React.useState('us');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

    return (
        <div className = {classes.container}>
            <div className={classes.root} >
             <Field
             type="number"
             name = {props.name}
             id = {props.id}
             />
             <FormControl className={classes.formControl}>
             <Select
               value={age}
               onChange={handleChange}
               className={classes.select}
             >
               <MenuItem value={'us'}><img src = {UsLogo} alt = {"uslogo"} width="20" height="20"/></MenuItem>
               <MenuItem value={'aus'}><img src = {UsLogo} alt = {"uslogo"} width="20" height="20"/></MenuItem>
               <MenuItem value={'ind'}><img src = {UsLogo} alt = {"uslogo"} width="20" height="20"/></MenuItem>
             </Select>
             </FormControl>
            </div>
            {props.errors[props.name]? (
            <ErrorMessage
            name={props.name}
            component="div"
            className={classes.errorMessage}
          />
        ) : null}
        </div>
    )
}

export default DropDown
