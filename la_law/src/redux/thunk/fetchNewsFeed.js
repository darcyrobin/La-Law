import axios from "axios";
import { newfeedView } from "../post/actions";
import { NEWS_FEED_VIEW_FAIL, NEWS_FEED_VIEW_REQUEST } from "../post/actionType";

const fetchNewsFeed = async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_FEED_VIEW_REQUEST });
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
      `http://127.0.0.1:8000/api/publicpost/posts`,
      config
    );
    dispatch(newfeedView(data));
  } catch (error) {
    dispatch({
      type: NEWS_FEED_VIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchNewsFeed;
