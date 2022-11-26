import React from "react";
import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";

function DiscoverNews() {
  return (
    <div
      style={{
        color: "#3C3F44",
        fontSize: "12px",
        padding: "30px 30px 20px",
      }}
    >
      <p>Discover</p>
      <div>
        <div
          style={{ display: "flex", fontSize: "14px", margin: "15px" }}
          className={classes.discover_item}
        >
          <i class="uil uil-fire"></i>
          <p style={{ marginLeft: "10px" }}>Popular</p>
        </div>
        <div
          style={{ display: "flex", fontSize: "14px", margin: "15px" }}
          className={classes.discover_item}
        >
          <i class="uil uil-arrow-up"></i>
          <p style={{ marginLeft: "10px" }}>Most Upvoted</p>
        </div>
        <div
          style={{ display: "flex", fontSize: "14px", margin: "15px" }}
          className={classes.discover_item}
        >
          <i class="uil uil-comment-alt-dots"></i>
          <p style={{ marginLeft: "10px" }}>Best Discussions</p>
        </div>
      </div>
    </div>
  );
}

export default DiscoverNews;
