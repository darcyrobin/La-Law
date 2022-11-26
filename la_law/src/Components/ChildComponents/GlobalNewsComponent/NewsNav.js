import React from "react";

import DiscoverNews from "./DiscoverNews";
import ManageNews from "./ManageNews";
export default function NewsNav() {
  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "#ffffff",
        padding: "0 20px",
        borderTop: "1px dotted #3C3F44",
        height: "88vh",
      }}
    >
      <DiscoverNews />
      <ManageNews />
    </div>
  );
}
