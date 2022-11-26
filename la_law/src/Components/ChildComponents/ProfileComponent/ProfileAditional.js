import React from "react";
import classes from "../../../Styles/ChildStyles/ProfileBodyStyle/ProfileAditional.module.css";
import AddFriend from "../AditionalSideComponent/AddFriend";

function ProfileAditional() {
  return (
    <div>
      <div
        style={{
          width: "325px",
          height: "130px",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <p className={classes.adition_item}>Edit Public Profile & Url</p>
          <div
            style={{
              fontSize: "18px",
              width: "25px",
              height: "25px",
              textAlign: "center",
              borderRadius: "50%",
              color: "#ffffff",
              backgroundColor: "#797979",
            }}
          >
            <i class="uil uil-question"></i>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <p className={classes.adition_item}>Add Profile In Public Site</p>
          <div
            style={{
              fontSize: "18px",
              width: "25px",
              height: "25px",
              textAlign: "center",
              borderRadius: "50%",
              color: "#ffffff",
              backgroundColor: "#797979",
            }}
          >
            <i class="uil uil-question"></i>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "325px",
          height: "auto",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: "600",
            padding: "20px",
          }}
        >
          Please also viewed
        </p>

        <div style={{ padding: "10px" }}>
          <AddFriend />
          <AddFriend />
          <AddFriend />
          <AddFriend />
          <AddFriend />
          <AddFriend />
          <AddFriend />
        </div>
      </div>
    </div>
  );
}

export default ProfileAditional;
