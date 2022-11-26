import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPostCreate from '../../../redux/thunk/fetchPostCreate';
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";
export default function PostingPage(props) {
  const dispatch = useDispatch();
  
  const [content, setContent] = useState("");

  
  const closeBtn = (action) => {
    props.closeBtn(action);
  };

  const postSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchPostCreate(content));
    closeBtn(false)
  };
  return (
    <>
      <div className={classes.posting_page}>
        <div className={classes.posting_note}>
          <div className={classes.posting_page_title}>
            <p>Create a post</p>
            <button
              className={classes.posting_modal_close}
              onClick={() => closeBtn(false)}
            >
              <i class="uil uil-times "></i>
            </button>
          </div>

          <form>
          <div className={classes.posting_profile}>
            <div className={classes.posting_profile_bio}>
              <div className={classes.profile_post_image}>
                <img src={props.image} alt={props.name} />
              </div>
              <div className={classes.profile_post_person_name}>
                <p>{props.name}</p>
                <div className={classes.posting_profile_privacy}>
                  <i className={`bx bx-world ${classes.privacy_icon}`}></i>
                  <h5 className={classes.anyone_title}>Anyone</h5>
                  <i
                    className={`bx bxs-down-arrow ${classes.privacy_arrow}`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.posting_notepade}>
            <textarea
              name="posting_txt"
              id="posting_txt"
              placeholder="What do you want to talk about ?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className={classes.assets_line}>
            <i className={`bx bx-image ${classes.asset_icon_in_line}`}></i>
            <i className={`bx bxl-youtube ${classes.asset_icon_in_line}`}></i>
            <i
              className={`uil uil-document-info ${classes.asset_icon_in_line}`}
            ></i>
            <i className={`bx bx-party ${classes.asset_icon_in_line}`}></i>
            <i className={`bx bx-poll ${classes.asset_icon_in_line}`}></i>
            <i className={`uil uil-schedule ${classes.asset_icon_in_line}`}></i>
          </div>
          <button
                  type="submit"
                  className={classes.post_button} id="post_button"
                  onClick={postSubmitHandler}
                >
                  Post
                </button>
          </form>
        </div>
      </div>
    </>
  );
}
