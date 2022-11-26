import React from "react";
import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";
import NewsDiv from "./NewsDiv";

export default function NewsBody() {
  const allnews = [
    {
      id: 1,
      title: "Integrated carbon risk assessments",
      desc: "Our climate risk reports include analysis of an extensive set of carbon risk management and exposure metrics, sourced from sophisticated in house research and climate models, from stranded assets to clean technology investments and scenario analysis.",
    },
    {
      id: 2,
      title: "Integrated carbon risk assessments",
      desc: "Our climate risk reports include analysis of an extensive set of carbon risk management and exposure metrics, sourced from sophisticated in house research and climate models, from stranded assets to clean technology investments and scenario analysis.",
    },
    {
      id: 3,
      title: "Integrated carbon risk assessments",
      desc: "Our climate risk reports include analysis of an extensive set of carbon risk management and exposure metrics, sourced from sophisticated in house research and climate models, from stranded assets to clean technology investments and scenario analysis.",
    },
  ];
  return (
    <div className={classes.news_body} style={{ width: "75%" }}>
      <div style={{ display: "flex", padding: "20px", alignItems: "center" }}>
        <input
          type="text"
          style={{ width: "25vw", height: "50px", borderRadius: "12px" }}
        />
        <button
          type="submit"
          style={{
            fontSize: "25px",
            margin: "0 20px",
            backgroundColor: "transparent",
          }}
        >
          <i class="uil uil-search"></i>
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {allnews.map((news) => {
          return (
            <>
              <NewsDiv news={news} />
            </>
          );
        })}
      </div>
    </div>
  );
}
