import React from "react";

import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";
function ManageNews() {
  return (
    <div style={{ color: "#3C3F44", fontSize: "12px", margin: "50px 30px" }}>
      <p>Manage</p>
      <div>
        <div
          style={{ display: "flex", fontSize: "14px", margin: "15px" }}
          className={classes.discover_item}
        >
          <i class="uil uil-bookmark"></i>
          <p style={{ marginLeft: "10px" }}>Bookmarks</p>
        </div>
        <div
          style={{ display: "flex", fontSize: "14px", margin: "15px" }}
          className={classes.discover_item}
        >
          <i class="uil uil-history"></i>
          <p style={{ marginLeft: "10px" }}>Reading History</p>
        </div>
      </div>
    </div>
  );
}

export default ManageNews;
