import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import * as COLORS from "../constants/colors";
import { LOGIN, AuthState, Action } from "../actions/types";
import { returntypeof } from "react-redux-typescript";

const mapStateToProps = (state: AuthState) => {
  const { userName } = state.auth;
  return { userName };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    dispatch
  };
};

interface MapDispatchToProps {
  dispatch: Dispatch<Action>;
}

const stateProps = returntypeof(mapStateToProps);
type MapStateToProps = typeof stateProps;
type Props = MapStateToProps & MapDispatchToProps;

class Header extends React.Component<Props> {
  componentDidMount() {
    window.localStorage.removeItem("userName");
  }

  onLogout = () => {
    window.location.href = "/";
    this.props.dispatch({
      payload: "",
      type: LOGIN
    });
  };

  render() {
    const userName = window.localStorage.getItem("userName");
    console.log("===", userName);
    return (
      <NavBar>
        <LogoutButton onClick={this.onLogout}>
          {userName ? "Logout" : ""}
        </LogoutButton>
      </NavBar>
    );
  }
}

const NavBar = styled.div`
  background-color: ${COLORS.NAV_BAR};
  height: 40px;
`;

const LogoutButton = styled.button`
  float: right;
  text-decoration: none;
  margin: 2px 20px 2px 0;
  font-size: 25px;
  outline: none;
  background-color: transparent;
  border: none;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
