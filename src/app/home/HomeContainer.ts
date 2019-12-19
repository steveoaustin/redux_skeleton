import { connect } from "react-redux";
import Operations from "./duck/operations";
import HomeComponent from "./HomeComponent";
import { HomeState } from "./duck/types";

const mapStateToProps = (state: any) => {
  console.log(typeof state, state);
  const currentState: HomeState = state.home;
  return { currentState };
};

const mapDispatchToProps = (dispatch: any) => {
  const changeGreeting = (greeting: string) =>
    dispatch(Operations.changeGreeting(greeting));
  return { changeGreeting };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
