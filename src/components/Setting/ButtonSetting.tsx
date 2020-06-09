import React from 'react'
import {makeStyles, createStyles,Theme } from '@material-ui/core'
import Button from '@material-ui/core/Button';

const styles:any = makeStyles((theme: Theme) =>
    createStyles({
      btn: {
          color: '#009cde',
          border: 'solid 1px #cadce4', 
          padding: '10px',
          margin: 10,
      },
      normalBtn:{
        color: '#009cde',
        border: 'solid 1px #cadce4', 
        padding: '9px',
        opacity: '0.5',
        borderRadius: '0px 20px 20px 0px',
        margin: 10,
        background: 'white',
        // zIndex: '9999',
      }
    }))

    export default function ButtonSetting(props:any) {
    const classes = styles();
    return (
        <div>
                  <Button className = {classes.btn}>Change</Button>
        </div>
    )
}




export function InputButtonSetting(props:any) {
    const classes = styles();
    return (
        <div>
            <Button className = {classes.normalBtn}>Default</Button>
        </div>
    )
}



