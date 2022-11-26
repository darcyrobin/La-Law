import { NEWS_FEED_VIEW_SUCCESS, POST_CREATE_SUCCESS, POST_DELETE_SUCCESS, POST_UPDATE_SUCCESS, POST_VIEW_SUCCESS } from "./actionType";

export const postCreate = (data) => {
    return {
      type: POST_CREATE_SUCCESS,
      payload: data,
    };
  };
  
  export const postView = (data) => {
    return {
      type: POST_VIEW_SUCCESS,
      payload: data,
    };
  };
  
  export const postUpdate = (data) => {
    return {
      type: POST_UPDATE_SUCCESS,
      payload: data,
    };
  };
  
  export const postDelete = (data) => {
    return {
      type: POST_DELETE_SUCCESS,
    };
  };

  export const newfeedView = (data) => {
    return {
      type: NEWS_FEED_VIEW_SUCCESS,
      payload: data,
    };
  };