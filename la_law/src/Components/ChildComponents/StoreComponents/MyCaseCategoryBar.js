import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchcaseCategoryView from '../../../redux/thunk/fetchCaseCategory';
import classes from "../../../Styles/ChildStyles/StoreChild/MyCaseCategory.module.css";
import Loading from "../../Loading";
import CaseCategory from "./CaseCategory";


export default function MyCaseCategoryBar() {
  const dispatch = useDispatch();
  const caseCategoryView = useSelector((state) => state.caseCategoryView);
  const { loading, cases_category } = caseCategoryView;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchcaseCategoryView)
    }
  }, [ userInfo, dispatch]);
  return (
    <div className={classes.my_case_category}>
      <div className={classes.category_title}>
        <i class="uil uil-list-ul"></i>
        <p>My Case Category</p>
      </div>
      {loading ? <Loading/> : <div className={classes.case_categoryes}>
        {cases_category.map((case_category) => {
          return <CaseCategory case_category={case_category} key={case_category.id}/>;
        })}
      </div>
    }
      </div>
  );
}
