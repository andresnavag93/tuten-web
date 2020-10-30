import { initialState } from "../initialStates";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
      };

    default:
      return state;
  }
};
