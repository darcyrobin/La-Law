import axios from "axios";
import { userProfile } from "../user/actions";
import { USER_PROFILE_FAIL, USER_PROFILE_REQUEST } from "../user/actionType";

const fetchUserDetails = async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });
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
      `http://127.0.0.1:8000/api/account/profile`,
      config
    );
    dispatch(userProfile(data[0]));
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchUserDetails;
