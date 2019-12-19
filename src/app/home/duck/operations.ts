import ActionTypes from "./actionTypes";

const changeGreeting = (newGreeting: string) => {
  return (dispatch: any) => {
    dispatch(ActionTypes.ChangeGreeting(newGreeting));
  };
};

export default { changeGreeting };
