import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
// import Logo from '../Header/Logo';
import OneSideBar from './OneSideBar';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

const styles = makeStyles(theme =>
    createStyles({
        container:{
            backgroundColor: '#f9fdff',
        },
        account:{
            opacity: '0.4',
            fontFamily: "AkkuratPro",
            fontSize: 10,
            fontWeight: 'bold',
            lineHeight: '1.6',
            letterSpacing: '1',
            color: '#3a4e6f',
            marginLeft: 20,
            marginTop: 20,
        },
        dashboard:{},
        logo:{},
        buy:{},
        sell:{},
        wallet:{},

    }))

function SideBar() {
    const classes = styles();
    return (
        <div className = {classes.container}>
         <div className = {classes.logo}>
             {/* <Logo /> */}
         </div>
         <p className = {classes.account}>ENGINE</p>
         <div className = {classes.dashboard}>
             <OneSideBar Icon = {<DashboardIcon />} Name = 'Dashboard' />
         </div>
         <div className = {classes.buy}>
             <OneSideBar Icon = {<AssignmentReturnedIcon />} Name = 'Buy' />
         </div>
         <div className = {classes.sell}>
             <OneSideBar Icon = {<AssignmentReturnIcon />} Name = 'Sell' />
         </div>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<AccountBalanceWalletIcon />} Name = 'Wallet' />
         </div>
         <p className = {classes.account}>ACCOUNT</p>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<AccountCircleIcon />} Name = 'Profile' />
         </div>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<SpeedIcon />} Name = 'Limits' />
         </div>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<NotificationsActiveIcon />} Name = 'Notification' />
         </div>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<SettingsIcon />} Name = 'Settings' />
         </div>
         <div className = {classes.wallet}>
             <OneSideBar Icon = {<HelpIcon />} Name = 'Support' />
         </div>
        </div>
    )
}

export default SideBar
