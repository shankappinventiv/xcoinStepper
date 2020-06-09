import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
const styles = makeStyles(theme =>
    createStyles({
        container:{
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 40,
            '&:hover':{
                // opacity: '0.05',
                backgroundColor: '#f9fdff',
            },
        },
        sideBarIcon:{
            color: 'black',
            opacity: '0.5',
            cursor: 'pointer',
            '&:hover':{
                color: '#009cde',
            }
        },
        iconName:{
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 40,
            lineHeight: '1.57',
            color: '#000000',
            cursor: 'pointer',
            '&:hover':{
                color: '#009cde',
            }
        },
    }))

function OneSideBar(props:any) {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div className={classes.sideBarIcon}>
                {props.Icon}
            </div>
            <div  className={classes.iconName}>
                {props.Name}
            </div>
        </div>
    )
}

export default OneSideBar
