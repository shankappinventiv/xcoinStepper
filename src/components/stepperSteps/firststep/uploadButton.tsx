import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import {handleUploadFile} from '../firststep/action'
// import {ReducersModal} from '../../../modal'
import { ErrorMessage,Field } from "formik";
import CancelIcon from '@material-ui/icons/Cancel';

const styles = makeStyles((theme:Theme) =>
    createStyles({
        container:{
            marginTop: '20px',
            marginBottom: '20px',
            '& span':{
                marginLeft: 20,
            }
        },
        btn:{
            backgroundColor: '#009cde',
            padding: '10px 25px',
            borderRadius: 10,
            boxShadow: '0 2px 4px 0 rgba(0, 156, 222, 0.3)',
            color: 'white',
            textAlign: 'center',
            "& .MuiButton-label":{
                marginLeft: 0,
            },
            '&:hover':{
                backgroundColor: '#009cde',
            }
        },
        errorMessage: {
            color: "#d0021b",
            opacity: "0.5",
            fontSize: "16px",
            marginTop: 15,
          },
          label:{
            opacity: 0.5,
            fontFamily: 'AkkuratPro',
            fontSize: 16,
            lineHeight: '1.63',
            color: '#637696',
            marginTop: 20,
            marginBottom: 10,
        },
        imgPreview:{
            position: 'relative',
            marginTop: 20,
        },
        cross:{
            position: 'absolute',
            top: 0,
            right: '62%',
            // top: '-15px',
            '& svg':{
                color: '#009cde'
            }
        }
        
    }))



export default function UploadButton(props:any) {
    // console.log(props.errors, 'erros')
    const classes = styles()
    const dispatch = useDispatch();  
     const handleUploadButton = (e:any, id:any) =>{
        const inpField:any =  document.getElementById(id);
         inpField.click();                
     }

     const removeData = (id:any) =>{
         if(id === 'firstDoc'){
             dispatch({type: 'firstDoc',
                payload: {'firstDoc': '', furl: '' } 
            })
         } else if(id === 'secondDoc'){
            dispatch({type: 'firstDoc',
            payload: {'secondDoc': '', surl: '' } 
        })
         } else if (id === 'thirdDoc') {
            dispatch({type: 'firstDoc',
            payload: {'thirdDoc': '', turl: '' } 
        }) 
         }

          
     }
     const handleData = (e:any , id:any,name:any) =>{
        // debugger
        props.setFieldValue("firstDoc",e.target.files[0].name)
        // console.log(,props.setFieldValue(),'file')
        // debugger
        dispatch(handleUploadFile(e, id))
     }
    return (
        <div className = {classes.container}>
            <div className = {classes.label}>{props.label} </div>
              <Field
                  type="file"
                  multiple accept='image/*'
                  id={props.id}
                  onChange={(e:any) =>  handleData(e,props.id, props.name) }
                  style={{display: 'none'}}
                  name = {props.name}
                  
                />
                <Button className = {classes.btn} onClick={(e) =>handleUploadButton(e, props.id)} name = {props.name}>
                 upload File
                </Button>                
                {props.doc ? <span>File Name:- {props.doc.name}</span>: <span>No File Chosen</span>}
                <div className = {classes.imgPreview}>{props.url&&<><img src = {props.url} alt = {''} width = {200}/><span onClick = {() =>removeData(props.id)} className = {classes.cross}><CancelIcon /></span></>}</div>
                {props.errors[props.name]? (
                <ErrorMessage
                 name={props.name}
                 component="div"
                 className={classes.errorMessage}
                />
        ) : null}
                
        </div>
    )
}
