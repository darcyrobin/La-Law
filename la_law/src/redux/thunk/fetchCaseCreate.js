import axios from "axios";
import { caseCreate } from "../case/actions";
import { CASE_CREATE_FAIL, CASE_CREATE_REQUEST } from "../case/actionType";

const fetchCaseCreate = (
  case_number,
  case_title,
  case_category,
  case_details,
  complainant,
  defendant,
  case_docs,
  division,
  case_respondent
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CASE_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      console.log(
        case_number,
        case_title,
        case_category,
        case_details,
        complainant,
        defendant,
        case_docs,
        division,
        case_respondent
      );
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/store/case-create",
        {
          case_number: case_number,
          case_title: case_title,
          case_category: case_category,
          case_details: case_details,
          complainant: complainant,
          defendant: defendant,
          case_docs: case_docs,
          division: division,
          case_respondent: case_respondent,
        },
        config
      );
      dispatch(caseCreate(data));
    } catch (error) {
      dispatch({
        type: CASE_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchCaseCreate;
