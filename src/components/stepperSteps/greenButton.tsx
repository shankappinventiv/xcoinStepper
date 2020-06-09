import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';


const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            marginTop: 10,

        },
        btn:{
            borderRadius: 7,
            boxShadow: '0 2px 4px 0 rgba(134, 195, 6, 0.3)',
            backgroundColor: 'rgb(134, 195, 6)',
            color: '#ffffff',
            fontSize: 14,
            padding: '10px 30px',
            '&:hover':{
                backgroundColor: 'green', 
            },
        },
    }))

export  function GreenButton(props:any) {
    const classes = styles()
    return (
        <div className= {classes.container}>
            <Button 
            type="submit"
            className={classes.btn}
            >
        {props.text}
      </Button>
        </div>
    )
}

export  function GreenButtonTypeOnClick(props:any) {
    const classes = styles()
    return (
        <div className= {classes.container}>
            <Button 
            onClick={props.onClick}
            className={classes.btn}
            >
        {props.text}
      </Button>
        </div>
    )
}