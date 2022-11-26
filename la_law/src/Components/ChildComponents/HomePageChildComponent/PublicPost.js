import React from "react";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/PublicPost.module.css";
export default function PublicPost({data}) {
  if (data.file === null){
    data.file = false
  }
  return (
    <>
      <div className={classes.post_template} key={data.id}>
        <div className={classes.post_sender_title}>
          <div className={classes.post_sender_info}>
            <div className={classes.sender_photo}>
              <img src={`http://127.0.0.1:8000${data.profile_pic}`} alt="Sender Person" />
            </div>
            <div className={classes.sender_name_and_work}>
              <div className={classes.post_sender_name}>
                <h5>{data.author}</h5>
              </div>
              <div className={classes.post_sender_current_work}>
                <p>
                  {data.designation} at {data.court}
                </p>
              </div>
            </div>
          </div>
          <div className={classes.post_option}>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
          </div>
        </div>
        <div className={classes.sender_post}>
          <p>{data.content}</p>
        </div>
        <br />
        <div className={classes.sender_file}>
           {data.file && data.file}
        </div>
      </div>
    </>
  );
}
