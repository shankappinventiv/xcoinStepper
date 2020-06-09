import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
const styles = makeStyles(theme =>
    createStyles({
        container:{
            
            display: 'flex',
            flexDirection: 'column',
        },
        heading:{
                fontFamily: 'CircularStd',
                fontSize: 18,
                // fontWeight: '500',
                lineHeight: '2',
                color: '#000000',
        },
        description:{
                opacity: '0.4',
                fontFamily: 'AkkuratPro',
                marginTop: 20,
                fontSize: 14,
                lineHeight: '1.57',
                color: '#3a4e6f',
                width: 100,
        },
    }))

function ShortDescription(props:any) {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
              {props.heading}
            </div>
            <div className={classes.description}> 
                {props.description}
            </div>
        </div>
    )
}

export default ShortDescription
