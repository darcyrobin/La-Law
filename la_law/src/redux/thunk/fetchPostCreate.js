import axios from "axios";
import { postCreate } from "../post/actions";
import { POST_CREATE_FAIL, POST_CREATE_REQUEST } from "../post/actionType";

const fetchPostCreate = (
 content
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POST_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/publicpost/create",
        {content:content},
        config
      );
      dispatch(postCreate(data));
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchPostCreate;
