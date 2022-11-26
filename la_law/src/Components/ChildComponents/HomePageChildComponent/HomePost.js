import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUserDetails from "../../../redux/thunk/fetchUserProfile";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";

import PostingPage from "./PostingPage";
export default function HomePost() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [postPageActive, setPostPageActive] = useState(false);
  const closeBtn = (action) => {
    setPostPageActive(action);
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserDetails);
    }
  }, [dispatch, userInfo]);
  const image = `http://127.0.0.1:8000${user.profile_pic}`;
  return (
    <>
      <div className={classes.home_post}>
        <div className={classes.input_post_field}>
          <div className={classes.profile_post_image}>
            <img src={image} alt={user.username} />
          </div>
          <button
            className={classes.profile_post_input}
            onClick={() => setPostPageActive(true)}
          >
            Start a post
          </button>
        </div>
        <div className={classes.assets_field}>
          <div className={`${classes.asset_field} ${classes.photo_field}`}>
            <div className={`${classes.asset_icon} ${classes.photo_icon}`}>
              <i class="bx bx-image"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Photo</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.video_field}`}>
            <div className={`${classes.asset_icon} ${classes.video_icon}`}>
              <i class="bx bxl-youtube"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Video</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.event_field}`}>
            <div className={`${classes.asset_icon} ${classes.event_icon}`}>
              <i class="bx bx-calendar"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Event</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.article_field}`}>
            <div className={`${classes.asset_icon} ${classes.article_icon}`}>
              <i class="bx bxs-notepad"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Write article</p>
            </div>
          </div>
        </div>
        {postPageActive ? (
          <PostingPage
            closeBtn={closeBtn}
            name={user.full_name}
            image={image}
          />
        ) : null}
      </div>
    </>
  );
}
