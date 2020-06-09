import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme:Theme) =>
    createStyles({
        formControl:{
            marginTop: 15,
            '& .MuiSvgIcon-root':{
                color: '#009cde',
            }
        },
        button:{},
  }))

export default function RadioButton(props: any) {
    const classes = styles(); 
    return (
        <div> 
                <FormControl component="fieldset" error={props.error} className={classes.formControl}>
                <FormLabel component="legend">{props.label}</FormLabel>
                 <RadioGroup aria-label="quiz" name="quiz" value={props.value} onChange={props.handleRadioChange}>
                   <FormControlLabel value= {props.xcoin} control={<Radio />} label= {props.XcoinsWallet} />
                   <FormControlLabel value= {props.another} control={<Radio />} label={props.AnotherWallet} />
                 </RadioGroup>
                 <FormHelperText>{props.helperText}</FormHelperText>
                </FormControl>
        </div>
    )
}
