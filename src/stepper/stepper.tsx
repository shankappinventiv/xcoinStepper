import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import AllSteps from '../components/stepperSteps/AllSteps';
import KYCFunnel from '../components/stepperSteps/firststep';
import SecondStep from '../components/stepperSteps/secondStep'
import { useSelector } from "react-redux";
import ThirdStep from '../components/stepperSteps/thirdStep';
import ShowPaymentMode from '../components/stepperSteps/thirdStep/showPaymentMode';
import TransactionStatus from '../components/stepperSteps/fourthStep/transactionStatus';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& .MuiStepConnector-lineVertical':{
        display: 'none'
    },
    '& .MuiStepContent-root':{
        borderLeft: 'none',
    }

    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    stapLable:{
        fontSize: 100,
        '& .MuiStepLabel-iconContainer':{
            display: 'none'
        },
        
        
    },
  }),

);



function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <KYCFunnel />
    case 1:
      return <SecondStep />
    case 2:
      return <ThirdStep />
      case 3:
      return <ShowPaymentMode />
    default:
      return <TransactionStatus />;
  }
}

export default function BuyStepper() {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
 

  const {activeStep,statusOfFirstStep,statusOfSecondStep,statusOfThirdStep,statusOfFourthStep} = useSelector(
    (state: any) => state.stepReducer
  );
  function getSteps() {
    return [
              <AllSteps number = '1' stapName = 'KYC Funnel' status = {statusOfFirstStep}/>,
              <AllSteps number = '2' stapName = 'Review your order' status = {statusOfSecondStep}/>, 
              <AllSteps number = '3' stapName = 'Choose wallet' status = {statusOfThirdStep}/>, 
              <AllSteps number = '4' stapName = 'Pay for order' status = {statusOfFourthStep}/>, 
              <AllSteps number = '5' stapName = 'Transaction status' /> 
          ];
  }
  const steps = getSteps();

  // const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
// 
  // const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
// 
  // const handleReset = () => {
    // setActiveStep(0);
  // };
 


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel className = {classes.stapLable}>{label}</StepLabel>
            <StepContent>
              <>{getStepContent(index)}</>
              {/* <div className={classes.actionsContainer}> */}
                {/* <div> */}
                  {/* <Button */}
                    {/* // disabled={activeStep === 0} */}
                    {/* // onClick={handleBack} */}
                    {/* // className={classes.button} */}
                  {/* // > */}
                    {/* Back */}
                  {/* </Button> */}
                  {/* <Button */}
                    {/* // variant="contained" */}
                    {/* // color="primary" */}
                    {/* // onClick={handleNext} */}
                    {/* // className={classes.button} */}
                  {/* // > */}
                    {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                  {/* </Button> */}
                {/* </div> */}
              {/* </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && ( */}
        {/* // <Paper square elevation={0} className={classes.resetContainer}> */}
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          {/* <Button onClick={handleReset} className={classes.button}> */}
            {/* Reset */}
          {/* </Button> */}
        {/* </Paper> */}
      {/* // )} */}
    </div>
  );
}
