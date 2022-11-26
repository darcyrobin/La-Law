import React from "react";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/ShortProfile.module.css";
export default function CaseTitle() {
  return (
    <>
      <div className={`${classes.recent_div} ${classes.recent_case}`}>
        <div className={classes.recent_home_icon}>
          <i className="bx bxs-briefcase"></i>
        </div>
        <div className={classes.case_title}>
          <p>
            Civil Petition 860/2022 ((From the judgment and order dated 05th day
            of April, 2018 passed by the High Court Division in Writ Petition
            No.7545 of 2015))
          </p>
        </div>
      </div>
    </>
  );
}
