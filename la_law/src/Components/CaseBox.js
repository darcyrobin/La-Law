import React from "react";
import classes from "../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";
import SingleCase from "./ChildComponents/StoreComponents/CaseTableComponents/SingleCase";
export default function CaseBox({cases}) {
  return (
    <>
      <table style={{ width: "100%" }} className={classes.case_table}>
        <tr className={classes.table_head}>
          <th>SI</th>
          <th>Case Number</th>
          <th>Parties</th>
          <th>Details</th>
          <th>Division</th>
          <th>Result</th>
        </tr>
        {cases.length > 0 ? cases.map((data, index) => {
          return (
              <SingleCase data={data} index={index+1} key={data._id}/>
          );
        }): <div style={{position:'relative', textAlign:'center', alignItems:'center', padding: '20px', margin:'20px'}}>No Data Found</div>}
      </table>
    </>
  );
}
