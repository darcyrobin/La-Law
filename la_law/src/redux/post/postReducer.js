import { NEWS_FEED_VIEW_FAIL, NEWS_FEED_VIEW_REQUEST, NEWS_FEED_VIEW_SUCCESS, POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_DELETE_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_UPDATE_FAIL, POST_UPDATE_REQUEST, POST_UPDATE_SUCCESS, POST_VIEW_FAIL, POST_VIEW_REQUEST, POST_VIEW_SUCCESS } from "./actionType";

export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_CREATE_REQUEST:
        return {
          loading: true,
        };
      case POST_CREATE_SUCCESS:
        return {
            ...state,
          loading: false,
          success: true,
          post: action.payload,
        };
      case POST_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const postViewReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
      case POST_VIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_VIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case POST_VIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const postUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_UPDATE_REQUEST:
        return {
          loading: true,
        };
      case POST_UPDATE_SUCCESS:
        return {
          loading: false,
          success: true,
          post: action.payload,
        };
      case POST_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const postDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_DELETE_REQUEST:
        return {
          loading: true,
        };
      case POST_DELETE_SUCCESS:
        return {
          loading: false,
          success: true,
        };
      case POST_DELETE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const newsFeedViewReducer = (state = { posts: {results:[]} }, action) => {
    switch (action.type) {
      case NEWS_FEED_VIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEWS_FEED_VIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          posts: action.payload,
        };
      case NEWS_FEED_VIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };