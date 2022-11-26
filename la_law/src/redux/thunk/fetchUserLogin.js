import axios from "axios";
import { login } from "../user/actions";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST } from "../user/actionType";

const fetchUserLogin = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const convertEmail = email.split("@")[0];
      console.log(email, password, "This is ");
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        { username: convertEmail, password: password },
        config
      );
      dispatch(login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchUserLogin;
