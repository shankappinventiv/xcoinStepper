import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
// import {} from "../../modal"
import { useSelector } from "react-redux";
import Clock from "../assets/clock-01.png"



const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            background: 'white',
            padding: "80px 25px 100px 25px",
            width: "100%"

        },
        order:{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 2,
            color: '#000000',
        },
        spend:{
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: 1.63,
            color: '#3a4e6f',
            marginTop: '30px',
        },
        spedNum:{
            fontFamily: 'CircularStd',
            fontSize: 36,
            lineHeight: 1.33,
            color: '#000000',
        },
        rate:{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            '& span':{
                opacity: 0.4,
                fontFamily: 'AkkuratPro',
                fontSize: 14,
                lineHeight: 1.57,
                color: '#3a4e6f',
            }
        },
        orderExpire:{
            backgroundColor: 'rgba(134, 195, 6, 0.1)',
            borderRadius: 7,
            padding: '5px 10px',
            marginTop: 15,
            display: 'flex',
            alignItems: 'center',
            '& span':{
                fontFamily: 'AkkuratPro',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 1.57,
                color: '#86c306',
                marginLeft: 5,
            }
        }
    }))
function OrderSummery() {
    const classes = styles();
    // const {send, receive} = new exchangeMoney()
    const { send, receive,timmer } = useSelector(
        (state: any) => state.moneyExchangeReducer
      );
    
    const [clock, setClock]:any = React.useState({
        minutes: 30,
        seconds: 0,
    })
    const myInterval:any = () => setTimeout(() => {
        const { seconds, minutes }:any = clock;

        if (seconds > 0) {
            setClock(({ seconds }:any) => ({
                minutes: minutes,
                seconds: seconds - 1
            }))
        } else if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(myInterval)
            } else {
                setClock(({ minutes }:any) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }, 1000)
    React.useEffect(() =>{
        if(timmer){
            myInterval()
        }
        // myInterval(myInterval)
    })
    
    
    // clearInterval(myInterval)
    
    return (
        <div className = {classes.container}>
            <div className = {classes.order}>Order summary</div>
            <div className = {classes.spend}>I send</div>
            <div className = {classes.spedNum}>{send}</div>
            <div className = {classes.spend}>I receive</div>
           <div className = {classes.spedNum}>{receive}</div>
           <div className = {classes.orderExpire}>
                <img src = {Clock} alt = {"Clock"} /> <span>Order will expire in { clock.minutes === 0 && clock.seconds === 0
                    ? <span>Busted</span>
                    : <span>{clock.minutes}:{clock.seconds < 10 ? `0${clock.seconds}` : clock.seconds}</span>
                }</span>
           </div>
            <div className = {classes.rate}>
                <span>Exchange rate</span>
                <span>9,542.69 USD</span>
            </div>
            <div className = {classes.rate}>
                <span>Total spend</span>
                <span>2,000 USD</span>
            </div>
            <div className = {classes.rate}>
                <span>Total receive</span>
                <span>9,542.69 USD</span>
            </div>

        </div>
    )
}

export default OrderSummery
