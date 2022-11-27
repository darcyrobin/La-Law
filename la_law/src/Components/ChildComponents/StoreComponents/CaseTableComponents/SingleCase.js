import React from "react";
import classes from "../../../../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";

export default function SingleCase({data, index}) {
  return (
    <>
      <tr className={classes.single_case} key={data._id}>
        <td>{index}</td>
        <td>{data.case_number}</td>
        <td>{data.defendant} <br/> VS <br/> {data.complainant}</td>
        <td>
          <a href={`store/case/${data._id}`}>{data.case_title}</a>
        </td>
        <td>{data.division}</td>
        <td> {data.case_respondent}</td>
      </tr>
    </>
  );
}
