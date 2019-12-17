import { connect } from "react-redux";
import { Dispatch } from "redux";
import HomeComponent from "./HomeComponent";
import { HomeState } from "../../utils/types";

const mapStateToProps = (state: HomeState) => {
  const currentState: string = state.greeting;
  return { currentState };
};

const mapDispatchToProps = {
  onMessageChange: (greeting: string) => ({ type: "CHANGE_GREETING" })
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
