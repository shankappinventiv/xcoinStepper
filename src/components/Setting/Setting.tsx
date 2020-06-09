import React from 'react'
import {makeStyles, createStyles } from '@material-ui/core'
// import InputField from '../SignUpForm/InputField'
import ShortDescription from './ShortDescription';
// import ButtonSetting, { InputButtonSetting } from './ButtonSetting';
import SideBar from './SideBar';
// import Notes from './Notes';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuyStepper from '../../stepper/stepper';
import OrderSummery from '../orderSummery/OrderSummery';

const styles = makeStyles(theme =>
    createStyles({
        gradParent:{
            display: 'flex',
            // backgroundColor: '#f9fdff;',
        },
        sideBar:{
            flex: 2,
        },
        parent:{
            flex: 6,
            '&::before':{
                width: '75%',
                height: 411,
                content: '""',
                zIndex: -1,
                position: 'absolute',
                backgroundColor: '#ecf8fd',
                borderBottomLeftRadius: 150,
            },
        },
        container:{
            borderRadius: 40,
            width: 700,
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '0 50px',
            boxShadow: '0 7px 15px 0 rgba(23, 115, 166, 0.07)',
            '& div':{
                // marginTop: 40,
            }
        },
        mainProfile:{
            display: 'flex',
            margin: '20px 0 50px 0',
            paddingTop: '30px',
        },
        profile:{
            display: 'flex',
            flex: '1',
        },
        firstLastNameField:{

        },
        address:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '50px 0',
        },
        description:{},
        currentAddress:{},
        currentAddressbar:{
                opacity: '0.5',
                fontFamily: 'AkkuratPro',
                fontSize: 16,
                lineHeight: '1.63',
                color: '#637696',
        },
        currentAddressDescription:{
                fontFamily: 'AkkuratPro',
                fontSize: 16,
                lineHeight: '1.63',
                color: '#637696',
        },
        addressChangebtn:{},
        email:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '50px 0',
        },
        EmailField:{
            display: 'flex',
            alignItems: 'bottom',
        },
        emailbtn:{
            marginTop: '43px',
            marginLeft: -9,
        },
        Password:{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 70,

        },
        PasswordlField:{
            display: 'flex',
            alignItems: 'bottom',  
        },
        PhoneField:{
            display: 'flex',
            alignItems: 'bottom',
        },
        PhoneNumber:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '50px 0',
        },
        kyc:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '50px 0',
            paddingBottom: 30,
        },
        headingSettin:{
            display: 'flex',
            justifyContent: 'space-between',
            width: 700,
            margin: '0 auto',
            alignItems: 'center',
        },
        profileIcon:{
            color: 'black',
            opacity: '0.5',
            '& svg':{
                marginLeft: 20,
            }
        },
        orderSummery:{
            flex: 2,
        }
    }
    ))

function Setting() {
    const classes = styles();
    return (
        <div className={classes.gradParent}>
            <div className={classes.sideBar}>
                <SideBar />
            </div>
            <div className={classes.parent}>
               <div className = {classes.headingSettin}>
                    <ShortDescription heading = 'Setting' description ='Hello, Anton!' />
                    <div className={classes.profileIcon}>
                       <NotificationsActiveIcon />
                       <SettingsIcon />
                       <AccountCircleIcon />
                    </div>
                </div>
                <div className={classes.container}>
                    <BuyStepper />
                </div>
            </div>
            <div className = {classes.orderSummery}>
                <OrderSummery />
            </div>
        </div>
    )
}

export default Setting
