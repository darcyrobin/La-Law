import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCaseView from "../../../../redux/thunk/fetchCaseView";
import classes from "../../../../Styles/ChildStyles/StoreChild/MyCaseBox.module.css";
import CaseBox from "../../../CaseBox";
import Loading from "../../../Loading";
import AddCaseButton from "./AddCaseButton";
import CaseSearchBar from "./CaseSearchBar";

export default function MyCaseBox() {
  const dispatch = useDispatch();
  const caseView = useSelector((state) => state.caseView);
  const { loading, cases } = caseView;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCaseView)
    }
  }, [ userInfo, dispatch]);
  
  return (
    <div className={classes.my_case_box}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <CaseSearchBar />
        <AddCaseButton />
      </div>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        {loading ? <Loading/> : (
          <CaseBox cases={cases} />
        )}
      </div>
    </div>
  );
}
