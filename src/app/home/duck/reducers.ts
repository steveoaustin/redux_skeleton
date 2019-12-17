import * as Types from "./actionTypes";
import { HomeState } from "../../../utils/types";

const INITIAL_STATE: HomeState = {
  greeting: "HUSSSSSSS GOOOOOOOOOOOOOOOD"
};

const homeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.CHANGE_GREETING: {
      return { ...state, greeting: action };
    }

    default:
      return state;
  }
};

export default homeReducer;
