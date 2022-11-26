import React from "react";
import logo from "../../assets/images/logo/logo.png";
import classes from "../../Styles/ChildStyles/Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo_bar}>
      <a href="/home">
        <img src={logo} alt="logo" className={classes.nav_logo_img} />
      </a>
      <a href="/home" className={classes.nav_title}>
        LA-Law
      </a>
    </div>
  );
}

export default Logo;
