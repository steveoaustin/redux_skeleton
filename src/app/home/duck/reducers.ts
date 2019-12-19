import Types from "./actionTypes";
import { HomeState } from "./types";

const INITIAL_STATE: HomeState = {
  greeting: "HUSSSSSSS GOOOOOOOOOOOOOOOD"
};

const homeReducer = (state = INITIAL_STATE, action: any): HomeState => {
  switch (action.type) {
    case Types.CHANGE_GREETING: {
      return { ...state, greeting: action.payload };
    }

    default:
      return state;
  }
};

export default homeReducer;
