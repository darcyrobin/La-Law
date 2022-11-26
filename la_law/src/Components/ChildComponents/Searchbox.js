import React, { useState } from "react";
import classes from "../../Styles/ChildStyles/Searchbox.module.css";
export default function Searchbox() {
  const [searchBox, setSearchBox] = useState(false);
  const [searchButton, setSearchButton] = useState(true);
  return (
    <>
      {searchButton ? (
        <button
          className={classes.search_bar}
          onClick={() => {
            setSearchBox(true);
            setSearchButton(false);
          }}
        >
          <i class="bx bx-search-alt-2"></i>
        </button>
      ) : null}
      {searchBox ? (
        <div className={classes.search_bar_input}>
          <button
            className={classes.back_arrow}
            onClick={() => {
              setSearchBox(false);
              setSearchButton(true);
            }}
          >
            <i class="bx bx-left-arrow-alt"></i>
          </button>
          <input
            type="text"
            className={classes.search_input}
            placeholder="Search Here"
          />
        </div>
      ) : null}
    </>
  );
}
