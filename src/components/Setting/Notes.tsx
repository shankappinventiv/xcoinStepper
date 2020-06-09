import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
// import classes from '*.module.sass'
import NotesImgae from '../assets/clock-02.svg'

const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
            alignItems: 'center',
            // opacity: 0.1,
            padding: '0px 40px',
            borderRadius: 7,
            marginTop: 30,
            backgroundColor: '#f7f3e8',
            '& div':{
            fontFamily: 'AkkuratPro',
            fontSize: 14,
            marginLeft: 10,
            // textAlign: 'center',
            // opacity: 1.1,
            fontWeight: 'bold',
            lineHeight: 1.57,
            letterSpacing: 'normal',
            color: '#e6b413',
            }
        }
    }))

function Notes() {
    const classes = styles()
    return (
        <div className = {classes.container}>
        <img src = {NotesImgae} alt = {' '} />
        <div>
        Warning! You should update your KYC info.
        </div>
        </div>
    )
}

export default Notes
