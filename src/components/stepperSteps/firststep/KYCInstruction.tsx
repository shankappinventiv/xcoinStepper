import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{

        },
        firstInstruction:{
            marginTop: 15,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696'
        },
        secondInstruction:{
            marginTop: 15,
            padding: 20,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#637696',
            borderRadius: 20,
            boxShadow: '0 10px 20px 0 rgba(59, 88, 104, 0.07)',
            backgroundColor: '#ffffff',
        },
    }))
function KYCInstruction() {
    const classes = styles()
    return (
        <div className = {classes.container}>
            <div className = {classes.firstInstruction}>
            To start buying or selling coins now you need to quickly finish verifying your account
            </div>
            <div className = {classes.secondInstruction}>
            Follow instructions to start buying cryptocurrencies via Xcoins:<br/>
            1:- Upload the front and back of your government issued ID <br/>
            2:- Please take a selfie holding your identity document and a note
            with today’s date and «Xcoins» written on it
            </div>
        </div>
    )
}

export default KYCInstruction
