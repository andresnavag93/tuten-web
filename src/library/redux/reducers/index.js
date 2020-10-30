import { initialState } from "../initialStates";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_DATA_TABLE":
      return {
        ...state,
        dataTable: action.dataTable,
      };

    case "DELETE_TOKEN":
      return {
        ...state,
        token: null,
        dataTable: [],
      };

    default:
      return state;
  }
};
