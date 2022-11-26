import axios from "axios";
import { caseCategoryView } from "../case/actions";
import { CASE_CATEGORY_VIEW_FAIL, CASE_CATEGORY_VIEW_REQUEST } from "../case/actionType";

const fetchCaseCategory = async (dispatch, getState) => {
  try {
    dispatch({ type: CASE_CATEGORY_VIEW_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/store/case-category`,
      config
    );
    dispatch(caseCategoryView(data));
  } catch (error) {
    dispatch({
      type: CASE_CATEGORY_VIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchCaseCategory;
