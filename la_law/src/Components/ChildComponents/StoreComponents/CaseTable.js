import React from "react";
import MyCaseBox from "./CaseTableComponents/MyCaseBox";
import MyCaseCategoryBar from "./MyCaseCategoryBar";
export default function CaseTable() {
  return (
    <div style={{ display: "flex" }}>
      <MyCaseCategoryBar />
      <MyCaseBox />
    </div>
  );
}
