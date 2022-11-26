import React from "react";
import classes from "../../Styles/ChildStyles/Toggle.module.css";

export default function Toggle() {
  return (
    <>
      <div className={classes.toggle_button}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
    </>
  );
}
