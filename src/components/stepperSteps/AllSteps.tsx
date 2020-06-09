import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import greenMark from '../assets/arrow-green-01@2x.png'
const styles = makeStyles(theme =>
    createStyles({
        container:{
            borderRadius: 40,
            boxShadow: '0 7px 15px 0 rgba(23, 115, 166, 0.07)',
            backgroundColor:' #ffffff',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'space-between',
            padding: 20,
        },
        numberCircle:{
            width: 44,
            height: 44,
            borderRadius: 40,
            // opacity: 0.05,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ecf8fd',
            '& span':{
                fontFamily: 'CircularStd',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.56,
                textAlign: 'center',
                color: '#637696',
            },
        },
        numberCircleComplete:{
            width: 44,
            height: 44,
            borderRadius: 40,
            // opacity: 0.05,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(134, 195, 6,0.1)',
            '& span':{
                fontFamily: 'CircularStd',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.56,
                textAlign: 'center',
                color: 'rgb(134, 195, 6)',
            },
        },
        stepName:{
                fontFamily: 'CircularStd',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.56,
                textAlign: 'center',
                color: '#637696',
                marginLeft: 20,
        },
        status:{
            display: 'flex',
            alignItems:'center',
            // display: 'flex',
            // justifyContent: 'space-between',
        },
        done:{
            display: 'flex',
            alignItems:'center',
            borderRadius: 25,
            backgroundColor: 'rgb(134, 195, 6,0.05)',
            padding: 10,
            '& span':{
                color: 'rgb(134, 195, 6)',
                marginLeft: 10,
            }
        },
        notDone:{
            display: 'none',
        }
    }))
function AllSteps(props:any) {
    const classes = styles();
    return (
        <div className = {classes.container}>
            <div className = {classes.status}>
                 <div className = {props.status?classes.numberCircleComplete:classes.numberCircle}>
                      <span>{props.number}</span>
                 </div>
                 <div className = {classes.stepName}>
                    {props.stapName}
                 </div>
            </div>
            <div className = {props.status?classes.done:classes.notDone}>
                <img src = {greenMark} alt = {""} width = {20}/><span>Done</span>
            </div>

        </div>
    )
}

export default AllSteps
