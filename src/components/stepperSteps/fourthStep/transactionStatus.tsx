import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Clock from '../../assets/clock-02.svg'
const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            marginTop: 30,
        },  
        summary:{
            display: 'flex',
            justifyContent: 'space-between',
            '& span':{
                fontFamily: 'CircularStd',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 2,
                color: '#000000',
            }
        },
        pending:{
            backgroundColor: 'rgba(248,196,28,0.05)',
            borderRadius: 25,
            padding: '8px 10px',
            display: 'flex',
            alignItems: 'center',
            '& span':{
            fontFamily: 'AkkuratPro',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 1.57,
            color: '#f8c41c',
            marginLeft: 5,
            }
        },
        parentCircle:{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        circle:{
            
            width: 96,
            height: 96,
            border: 'solid 2px #3a4e6f',
            borderRadius: '50%',
            position: 'relative',
        },
        firstline:{
            backgroundColor: '#3a4e6f',
            width: '2px',
            height:20,
            position: 'absolute',
            left: 37,
            top: 44,
            transform: 'rotate(-56deg)',
        },
        secondline:{
            backgroundColor: '#3a4e6f',
            width: '2px',
            height:40,
            position: 'absolute',
            left: 57,
            top: 26,
            transform: 'rotate(46deg)',

        },
        exchangeMoney:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
        },
        bitCoin:{
            fontFamily: 'CircularStd',
            fontSize: 36,
            lineHeight: 1.33,
            color: '#000000',
        },
        doller:{},
        chart:{
            marginTop: 15,
        },
        exchangeRate:{
            marginTop: 15,
            display: 'flex',
            justifyContent: 'space-between',
            '& span':{
                fontFamily: 'AkkuratPro',
                fontSize: 16,
                lineHeight: 1.63,
                color: "#637696",

            }
        },
        backToDashboard:{
            marginTop: 25,
            backgroundColor: 'rgba(0,156,222, 0.1)',
            borderRadius: 7,
            textAlign: 'center',
            padding: "10px",
            '& span':{
                fontFamily: 'AkkuratPro',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 1.57,
                letterSpacing: 1,
                color: "#009cde"
            }
        },
    }))

export default function TransactionStatus() {
    const classes = styles()
    return (
        <div className = {classes.container}>
            <div className = {classes.summary}>
                <span>Summary</span>
                <div className = {classes.pending}>
                    <img src = {Clock} alt = {"pending"} /> <span>Pending</span>
                </div>
            </div>
            <div className = {classes.parentCircle}>
                <div className = {classes.circle}>
                    <span className = {classes.firstline}></span><span className = {classes.secondline}></span>
                </div>
            </div>
            <div className = {classes.exchangeMoney}>
                <div className = {classes.bitCoin}>1.646233</div>
                <ArrowForwardIcon />
                <div className = {classes.bitCoin}>15,000</div>

            </div>
            <div className = {classes.chart}>
                <div className = {classes.exchangeRate}>
                    <span>Exchange rate</span>
                    <span>9,542.69 USD</span>
                </div>
                <div className = {classes.exchangeRate}>
                    <span>Processing fee</span>
                    <span>100 USD</span>
                </div>
                <div className = {classes.exchangeRate}>
                    <span>Total spend</span>
                    <span>2,000 USD</span>
                </div>
                <div className = {classes.exchangeRate}>
                    <span>Total receive</span>
                    <span>1.646233 BTC</span>
                </div>
            </div>
            <div className = {classes.backToDashboard}>
                <span>BACK TO DASHBOARD</span>
            </div>

        </div>
    )
}
