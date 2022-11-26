import React from "react";

export default function CaseStudyIcons() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
      >
        <i class="uil uil-search"></i>
        <p>All</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
      >
        <i class="uil uil-book"></i>
        <p>Books</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
      >
        <i class="uil uil-document-layout-left"></i>
        <p>Articles</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
      >
        <i class="uil uil-newspaper"></i>
        <p>News</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
      >
        <i class="uil uil-file"></i>
        <p>Files</p>
      </button>
    </div>
  );
}
