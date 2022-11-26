import React from "react";
import classes from "../../../Styles/Pages/ManageMyNetwork.module.css";
import AddProfileBox from "../AddProfileBox";
function PendingInvitation() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          backgroundColor: "#ffffff",
          padding: "10px 15px",
          borderRadius: "12px",
          margin: "30px 20px",
        }}
      >
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
          }}
        >
          No Pending Invitaions
        </p>
        <button className={classes.button}>Manage</button>
      </div>

      <div
        style={{
          width: "80%",
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          padding: "10px 15px",
          borderRadius: "12px",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "RGBA(0, 0, 0, 0.9)",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
            }}
          >
            You can follow them
          </p>
          <button className={classes.button}>See all</button>
        </div>
        <div style={{ display: "flex", margin: "15px" }}>
          <AddProfileBox />
          <AddProfileBox />
          <AddProfileBox />
        </div>
        <div style={{ display: "flex", margin: "15px" }}>
          <AddProfileBox />
          <AddProfileBox />
          <AddProfileBox />
        </div>
        <div style={{ display: "flex", margin: "15px" }}>
          <AddProfileBox />
          <AddProfileBox />
          <AddProfileBox />
        </div>
      </div>
    </div>
  );
}

export default PendingInvitation;
