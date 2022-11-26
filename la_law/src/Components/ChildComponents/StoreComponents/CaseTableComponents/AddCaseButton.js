import React from "react";
import classes from "../../../../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";

export default function AddCaseButton() {
  return (
    <>
      <button type="button" className={classes.add_case_button}>
        Add Case
      </button>
    </>
  );
}
