import { CASE_CATEGORY_VIEW_FAIL, CASE_CATEGORY_VIEW_REQUEST, CASE_CATEGORY_VIEW_SUCCESS, CASE_CREATE_FAIL, CASE_CREATE_REQUEST, CASE_CREATE_SUCCESS, CASE_DELETE_FAIL, CASE_DELETE_REQUEST, CASE_DELETE_SUCCESS, CASE_DETAILS_REQUEST, CASE_DETAILS_SUCCESS, CASE_DIVISION_VIEW_FAIL, CASE_DIVISION_VIEW_REQUEST, CASE_DIVISION_VIEW_SUCCESS, CASE_LIST_FAIL, CASE_LIST_REQUEST, CASE_LIST_SUCCESS, CASE_UPDATE_FAIL, CASE_UPDATE_REQUEST, CASE_UPDATE_SUCCESS } from "./actionType";

export const caseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CASE_CREATE_REQUEST:
      return {
        loading: true,
      };
    case CASE_CREATE_SUCCESS:
      return {
        loading: false,
        case: action.payload,
      };
    case CASE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseViewReducer = (state = { cases: [] }, action) => {
  switch (action.type) {
    case CASE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CASE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        cases: action.payload,
      };
    case CASE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CASE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case CASE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        case: action.payload,
      };
    case CASE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CASE_DELETE_REQUEST:
      return {
        loading: true,
      };
    case CASE_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CASE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseDetailsReducer = (state = { case: {} }, action) => {
  switch (action.type) {
    case CASE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CASE_DETAILS_SUCCESS:
      return {
        loading: false,
        case: action.payload,
      };
    case CASE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseCategoryViewReducer = (
  state = { cases_category: [] },
  action
) => {
  switch (action.type) {
    case CASE_CATEGORY_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CASE_CATEGORY_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        cases_category: action.payload,
      };
    case CASE_CATEGORY_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const caseDivisionReducer = (state = { cases_division: [] }, action) => {
  switch (action.type) {
    case CASE_DIVISION_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CASE_DIVISION_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        cases_division: action.payload,
      };
    case CASE_DIVISION_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
