import React from "react";
import ManageMyNetwork from "../ChildComponents/MyNetworkComponent/ManageMyNetwork";
import PendingInvitation from "../ChildComponents/MyNetworkComponent/PendingInvitation";

function MyNetwork() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <ManageMyNetwork />
      <PendingInvitation />
    </div>
  );
}

export default MyNetwork;
