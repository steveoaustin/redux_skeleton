import React from "react";
import shortid from "shortid";
import {
  HomeDispatch as Dispatch,
  HomeState as State
} from "../../utils/types";

export default function HomeComponent(redux: {
  state: State;
  dispatch: Dispatch;
}): JSX.Element {
  return (
    <div>
      {redux.state.greeting}
      <input
        name="greeting"
        type="text"
        value="Type a messaage"
        onChange={redux.dispatch.changeGreeting}
      />
    </div>
  );
}
