import axios from "axios";
import { login, register } from "../user/actions";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST } from "../user/actionType";

const fetchUserRegister = (
  first_name,
  last_name,
  email,
  phone_number,
  password,
  practice_court,
  current_status
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let phone_number_convert = `+88${phone_number}`;
      console.log(
        first_name,
        last_name,
        email,
        phone_number_convert,
        password,
        practice_court,
        current_status
      );
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/auth/create/",
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number_convert,
          password: password,
          practice_court: practice_court,
          current_status: current_status,
        },
        config
      );
      dispatch(register(data));
      dispatch(login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchUserRegister;
