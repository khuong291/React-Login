import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { LOGIN, Action } from "../actions/types";
import * as COLORS from "../constants/colors";

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    dispatch
  };
};

interface Props {
  dispatch: Dispatch<Action>;
}

interface State {
  userName: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onLogin = () => {
    const { userName, password } = this.state;
    if (userName === "user1" && password === "password1") {
      window.localStorage.setItem("userName", userName);
      this.props.dispatch({
        payload: userName,
        type: LOGIN
      });
      window.location.href = "/dashboard";
      return;
    }
    alert("Invalid username or wrong password!");
  };

  onChangeUsername(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      userName: e.currentTarget.value
    });
  }

  onChangePassword(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      password: e.currentTarget.value
    });
  }

  render() {
    return (
      <Container>
        <Form placeholder="Enter Username" onChange={this.onChangeUsername} />
        <Form placeholder="Enter Password" onChange={this.onChangePassword} />
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
