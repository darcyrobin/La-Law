import React from "react";
import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";

function NewsDiv(props) {
  return (
    <div
      className={classes.news}
      style={{
        width: "310px",
        height: "350px",
        borderStyle: "groove",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "15px",
          color: "#000000",
          fontFamily: "Serif",
          fontSize: "19px",
          fontWeight: "bold",
        }}
      >
        {props.news.title}
      </div>
      <div style={{ padding: "15px", color: "#000000", fontFamily: "Serif" }}>
        {props.news.desc}
      </div>
      <div style={{ padding: "15px", color: "#000000", fontFamily: "Serif" }}>
        <a href="/">See More</a>
      </div>
    </div>
  );
}

export default NewsDiv;
