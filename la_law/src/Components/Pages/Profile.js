import React from "react";
import ProfileAditional from "../ChildComponents/ProfileComponent/ProfileAditional";
import ProfileBody from "../ChildComponents/ProfileComponent/ProfileBody";

function Profile() {
  return (
    <div style={{ display: "flex", marginLeft: "50px" }}>
      <ProfileBody />
      <ProfileAditional />
    </div>
  );
}

export default Profile;
