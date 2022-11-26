import React from "react";
import classes from "../../Styles/Pages/CaseStudy.module.css";
import CaseButton from "../ChildComponents/CaseStudyComponent/CaseButton";
import CaseStudyIcons from "../ChildComponents/CaseStudyComponent/CaseStudyIcons";
import CaseStudySearchbox from "../ChildComponents/CaseStudyComponent/CaseStudySearchbox";
import CaseStudySearchResult from "../ChildComponents/CaseStudyComponent/CaseStudySearchResult";
export default function CaseStudy() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <CaseStudySearchbox />
          <CaseButton />
        </div>
        <CaseStudyIcons />

        <hr />
      </div>
      <div className={classes.case_study_result}>
        <CaseStudySearchResult></CaseStudySearchResult>
      </div>
    </>
  );
}
