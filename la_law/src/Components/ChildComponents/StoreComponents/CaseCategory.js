import React from "react";
import classes from "../../../Styles/ChildStyles/StoreChild/MyCaseCategory.module.css";

export default function CaseCategory({case_category}) {
  return (
    <>
      <div className={classes.case_category} key={case_category.id}>
        <i class="uil uil-moneybag"></i>
        <p>{case_category.name}</p>
      </div>
    </>
  );
}
