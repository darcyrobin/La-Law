import React from "react";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/ShortProfile.module.css";
export default function Forums(props) {
  return (
    <>
      <div className={`${classes.recent_div} ${classes.recent_forum}`}>
        <div className={classes.recent_home_icon}>
          <i class="bx bxs-group"></i>
        </div>
        <div className={classes.forum_title}>
          <p>{props.forum}</p>
        </div>
      </div>
    </>
  );
}
