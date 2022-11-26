import React from "react";
import classes from "../../Styles/ChildStyles/Navbar.module.css";

function Navbar(props) {
  return (
    <>
      <div className={`${classes.nav_menu} ${props.toggleNavMenu}`}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <a href="/home" className={classes.nav_link}>
              <i class="bx bx-home-alt-2"></i>
            </a>
          </li>

          <li className={classes.nav_item}>
            <a href="/store" className={classes.nav_link}>
              <i class="bx bx-cloud"></i>
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="/case_study" className={classes.nav_link}>
              <i class="uil uil-file-search-alt"></i>
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="/my_network" className={classes.nav_link}>
              <i class="bx bx-group"></i>
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="/global_news" className={classes.nav_link}>
              <i class="uil uil-globe"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
