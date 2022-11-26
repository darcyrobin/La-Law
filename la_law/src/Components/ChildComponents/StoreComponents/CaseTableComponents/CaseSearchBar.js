import React from "react";
import classes from "../../../../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";

export default function CaseSearchBar() {
  return (
    <div className={classes.search_div}>
      <input
        type="text"
        className={classes.search_box}
        placeholder="Search Case Number"
      />
      <i class="bx bx-search-alt-2"></i>
    </div>
  );
}
