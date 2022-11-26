import React from "react";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";
import HomePost from "./HomePost";
import PublicPosts from "./PublicPosts";

export default function HomePostMain() {
  return (
    <>
      <div className={classes.home_post_main}>
        <HomePost />
        <PublicPosts />
      </div>
    </>
  );
}
