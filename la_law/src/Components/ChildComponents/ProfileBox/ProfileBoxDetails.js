import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux//user/actions";
import classes from "../../../Styles/ChildStyles/ProfileBoxDetails.module.css";
export default function ProfileBoxDetails() {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout);
  };
  const { first_name, last_name } = userInfo;
  return (
    <>
      <div className={classes.profile_box_details}>
        <a href="/myprofile" className={classes.profile_details}>
          {/* <div className={classes.profile_img}>
            <img src={profilepic} alt="profile pic" />
          </div> */}
          <div className={classes.profile_name}>
            <h3>{`${first_name} ${last_name}`}</h3>
            <p>See your profile</p>
          </div>
        </a>
        <div className={classes.border}></div>
        <div className={`${classes.setting} ${classes.box_div}`}>
          <div className={classes.profile_box_icon}>
            <i class="bx bx-color nav_link"></i>
          </div>
          <p className={classes.setting_button}>Setting & Privacy</p>
          <div className={classes.right_arrow}>
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
        <div className={`${classes.help} ${classes.box_div}`}>
          <div className={classes.profile_box_icon}>
            <i class="bx bx-help-circle nav_link"></i>
          </div>
          <p className={classes.help_button}>Help & Support</p>
          <div className={classes.right_arrow}>
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
        <div className={`${classes.feeedback} ${classes.box_div}`}>
          <div className={classes.profile_box_icon}>
            <i class="bx bxs-message-alt-error nav_link"></i>
          </div>
          <p className={classes.profile_details_button}>Give Feedback</p>
        </div>
        <div>
          <a
            href="/"
            className={`${classes.logout} ${classes.box_div}`}
            onClick={logoutHandler}
          >
            <div className={classes.profile_box_icon}>
              <i class="bx bx-log-out nav_link"></i>
            </div>
            <p className={classes.profile_details_button}>Log Out</p>
          </a>
        </div>
      </div>
    </>
  );
}
