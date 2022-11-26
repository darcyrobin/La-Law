import React from "react";
import classes from "../../../Styles/ChildStyles/ProfileBoxFooter.module.css";

export default function ProfileBoxFooter() {
  return (
    <div>
      <div className={classes.profile_box_footer}>
        <div className={classes.profile_box_list}>
          <a href="/" className={classes.profile_box_link}>
            Privacy
          </a>
          *
          <a href="/" className={classes.profile_box_link}>
            Terms
          </a>
          *
          <a href="/" className={classes.profile_box_link}>
            Cookiees More
          </a>
          *
          <a href="/" className={classes.profile_box_link}>
            Law-Comun &copy; 2022
          </a>
        </div>
      </div>
    </div>
  );
}
