import React from "react";
import classes from "../../../Styles/ChildStyles/AditionalPageClildStyle/AditionalPage.module.css";
import AddFriends from "./AddFriends";
import Advertise from "./Advertise";

export default function AditionalSide() {
  return (
    <>
      <div className={classes.home_aditional_side}>
        <AddFriends />
        <Advertise />
      </div>
    </>
  );
}
