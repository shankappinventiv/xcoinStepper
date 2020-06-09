import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696',
            margin: '15px 0'
        }
    }))

export default function StepInstruction(props:any) {
    const classes = styles()
    return (
        <div className = { classes.container }>
            {props.ins}
        </div>
    )
}
