import { CASE_CATEGORY_VIEW_SUCCESS, CASE_CREATE_SUCCESS, CASE_DELETE_SUCCESS, CASE_DETAILS_SUCCESS, CASE_DIVISION_VIEW_SUCCESS, CASE_LIST_SUCCESS, CASE_UPDATE_SUCCESS } from "./actionType";

export const caseCreate = (data) => {
  return {
    type: CASE_CREATE_SUCCESS,
    payload: data,
  };
};

export const caseView = (data) => {
  return {
    type: CASE_LIST_SUCCESS,
    payload: data,
  };
};

export const caseUpdate = (data) => {
  return {
    type: CASE_UPDATE_SUCCESS,
    payload: data,
  };
};

export const caseDelete = (data) => {
  return {
    type: CASE_DELETE_SUCCESS,
  };
};

export const caseDetails = (caseDetails) => {
  return {
    type: CASE_DETAILS_SUCCESS,
    payload: caseDetails,
  };
};

export const caseCategoryView = (data) => {
  return {
    type: CASE_CATEGORY_VIEW_SUCCESS,
    payload: data,
  };
};

export const caseDivisionView = (data) => {
  return {
    type: CASE_DIVISION_VIEW_SUCCESS,
    payload: data,
  };
};
