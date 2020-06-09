import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            marginTop: 20,
        },
        formControl:{
            width: '100%',
            '& .MuiInputBase-root':{
                backgroundColor: "#ecf8fd",
                borderRadius: 10,
            },
            '& .MuiSelect-selectMenu':{
                marginLeft: 10,
                padding: 12,
            }
        },
        label:{
            opacity: 0.5,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696',
            marginBottom: 7,
        },
    }))


export default function ChooseMethod() {
    const classes = styles();
  const [age, setAge] = React.useState('DrivingLicence');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
    return (
        <div className = {classes.container}>
        <div className = {classes.label}>Choose method * </div>
        <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value='DrivingLicence'>Driving Licence</MenuItem>
          <MenuItem value={'AdharCard'}>Adhar Card</MenuItem>
          <MenuItem value={'Pan'}>Pan Card</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}
