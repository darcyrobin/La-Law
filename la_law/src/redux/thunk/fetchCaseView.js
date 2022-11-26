import axios from "axios";
import { caseView } from "../case/actions";
import { CASE_LIST_FAIL, CASE_LIST_REQUEST } from "../case/actionType";

const fetchCaseView = async (dispatch, getState) => {
  try {
    dispatch({ type: CASE_LIST_REQUEST });
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
      `http://127.0.0.1:8000/api/store/case`,
      config
    );
    dispatch(caseView(data));
  } catch (error) {
    dispatch({
      type: CASE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchCaseView;
