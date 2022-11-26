import React from "react";
import classes from "../../../Styles/ChildStyles/ProfileBox.module.css";
import ProfileBoxDetails from "./ProfileBoxDetails";
import ProfileBoxFooter from "./ProfileBoxFooter";

export default function ProfileBox(props) {
  return (
    <>
      {props.toggle ? (
        <div className={`${classes.profile_box}`}>
          <ProfileBoxDetails />
          <ProfileBoxFooter />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
