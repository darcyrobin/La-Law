import React, { useState } from "react";
import classes from "../Styles/Nav.module.css";
import Logo from "./ChildComponents/Logo";
import Navbar from "./ChildComponents/Navbar";
import ProfileNavbar from "./ChildComponents/ProfileNavbar";
import Searchbox from "./ChildComponents/Searchbox";
import Toggle from "./ChildComponents/Toggle";
export default function Nav() {
  const [toggle, setToggle] = useState(false);
  function toggleClick() {
    setToggle((toggle) => !toggle);
  }
  let toggleNavMenu = toggle ? "Navbar_active__e1o6s" : "";
  let toggleProfileMenu = toggle ? "ProfileNavbar_deactive__5xZLU" : "";
  return (
    <>
      <div className={classes.nav}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Logo />
          <Searchbox />
          <div style={{ backgroundColor: "transparent" }} onClick={toggleClick}>
            <Toggle />
          </div>
        </div>
        <Navbar toggleNavMenu={toggleNavMenu} />
        <ProfileNavbar toggleProfileMenu={toggleProfileMenu} />
      </div>
    </>
  );
}
