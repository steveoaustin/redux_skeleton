import React from "react";
import { HomeState } from "./duck/types";

function HomeComponent(redux: {
  currentState: HomeState;
  changeGreeting: (newGreeting: string) => void;
}): JSX.Element {
  return (
    <div>
      {redux.currentState.greeting}
      <input
        name="greeting"
        type="text"
        value={redux.currentState.greeting}
        placeholder="change the greeting"
        onChange={e => redux.changeGreeting(e.target.value)}
      />
    </div>
  );
}

export default HomeComponent;
