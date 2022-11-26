import React from "react";
import NewsBody from "../ChildComponents/GlobalNewsComponent/NewsBody";
import NewsNav from "../ChildComponents/GlobalNewsComponent/NewsNav";

export default function GlobalNews() {
  return (
    <div style={{ display: "flex" }}>
      <NewsNav />
      <NewsBody />
    </div>
  );
}
