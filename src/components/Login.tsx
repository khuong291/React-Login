import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import * as TYPES from "../actions/types";
import * as COLORS from "../constants/colors";

interface IAction {
  payload: string;
  type: string;
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    dispatch
  };
};

interface IProps {
  dispatch: Dispatch<IAction>;
}

class Login extends React.Component<IProps> {
  public state = {
    shouldShowForm: false
  };

  public onLogin = () => {
    window.location.href = "https://khuong291.github.io/React-Login/dashboard";
    this.props.dispatch({
      payload: "Khuong",
      type: TYPES.LOGIN
    });
  };

  public render() {
    return (
      <Container>
        <Form placeholder="Enter Username" />
        <Form placeholder="Enter Password" />
        <LoginButton onClick={this.onLogin}>Login</LoginButton>
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
`;

const LoginButton = styled.button`
  color: ${COLORS.DARK_TEXT};
  text-decoration: none;
  background-color: ${COLORS.LOGIN_BUTTON};
  font-size: 40px;
  border: 2px solid;
  border-radius: 6px;
  box-shadow: 1px 2px ${COLORS.BOX_SHADOW};
`;

const Form = styled.input`
  font-size: 28px;
  width: 200px;
  margin: 2px 0 10px -45px;
`;

export default connect(
  null,
  mapDispatchToProps
)(Login);
