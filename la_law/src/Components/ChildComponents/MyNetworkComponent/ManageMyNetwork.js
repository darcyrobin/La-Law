import React from "react";
import classes from "../../../Styles/Pages/ManageMyNetwork.module.css";

export default function ManageMyNetwork() {
  return (
    <div
      style={{
        padding: "50px 10px 70px",
        width: "25%",
        background: "#ffffff",
        margin: "30px 40px",
        borderRadius: "12px",
      }}
    >
      <p style={{ color: "RGBA(0, 0, 0, 0.9)", padding: "5px" }}>
        Manage my network
      </p>
      <div style={{ margin: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-users-alt"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>Connections</p>
          </div>
          <p>121</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-book-alt"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>Contacts</p>
          </div>
          <p>202</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-user-circle"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>
              People I Follow
            </p>
          </div>
          <p>30</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-users-alt"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>Groups</p>
          </div>
          <p>3</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-schedule"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>Events</p>
          </div>
          <p>2</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "RGBA(0, 0, 0, 0.6)",
            padding: "10px",
          }}
          className={classes.link_item}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <i class="uil uil-newspaper"></i>
            <p style={{ marginLeft: "15px", fontSize: "16px" }}>Newsletter</p>
          </div>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
