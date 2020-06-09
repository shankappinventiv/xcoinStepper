import React from "react";
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";

interface Props {
  text: string;
  onPress: Function;
  isFacebookBtn?: boolean;
  isCustomCss?: boolean;
  isSubmitting?: boolean;
  isLevelCss?: boolean;
}

const styles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "1.5",
      letterSpacing: "1px",
    },
    btnGreen: {
      fontFamily: `"Nunito Sans", sans-serif`,
      boxShadow: " 0 2px 4px 0 var(--dark-green)",
      backgroundColor: "var(--dark-lime-green)",
      color: "var(--white)",
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "1.75",
      letterSpacing: "1px",
      width: "100%",
      padding: "17px",
      textTransform: "uppercase",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "var(--frog-green)",
      },
    },
    btnFacebook: {
      fontFamily: `"Nunito Sans", sans-serif`,
      boxShadow: " 0 2px 4px 0 var(--dark-green)",
      backgroundColor: "var(--light-blue)",
      color: "var(--white)",
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "1.75",
      letterSpacing: "1px",
      width: "100%",
      padding: "17px",
      textTransform: "uppercase",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "var(--denim-blue)",
      },
    },
    roundedPill: {
      borderRadius: "50rem!important",
    },
    mb13: {
      marginBottom: "1rem!important",
    },
    custom: {
      borderRadius: "7px !important",
      padding: "13px  !important",
      width: "178px",
      fontSize: "14px !important",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    levelCustom: {
      borderRadius: "7px !important",
      padding: "8px  !important",
      width: "108px",
      fontSize: "14px !important",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  })
);

export default function GreenButton({
  text,
  onPress,
  isFacebookBtn,
  isCustomCss,
  isSubmitting,
  isLevelCss,
}: Props) {
  // console.log(isSubmitting,"isSubmitting")
  const classes = styles();

  if (isFacebookBtn) {
    return (
      <Button
        type="button"
        className={`${classes.btn} ${classes.btnFacebook} ${classes.roundedPill} ${classes.mb13}`}
      >
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        type="submit"
        className={`${classes.btn} ${classes.btnGreen} ${classes.roundedPill} ${
          classes.mb13
        }  
        ${isCustomCss ? classes.custom : ""} ${
          isLevelCss ? classes.levelCustom : ""
        } `}
        onClick={() => onPress()}
        disabled={isSubmitting}
      >
        {isSubmitting ? <div className="loader">Loading...</div> : text}
      </Button>
    );
  }
}
