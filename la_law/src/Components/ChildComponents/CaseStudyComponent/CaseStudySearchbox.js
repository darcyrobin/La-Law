import React from "react";
export default function CaseStudySearchbox() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Your Case"
        style={{
          width: "60vw",
          height: "50px",
          paddingLeft: "50px",
          margin: "20px",
          borderRadius: "12px",
          outline: "none",
          border: "1px solid #9DA3BD",
        }}
      />
    </div>
  );
}
