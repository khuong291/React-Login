import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as COLORS from "../constants/colors";
import { IState } from "../index";

const mapStateToProps = (state: IState) => {
  return { userName: state.userName };
};

interface IProps {
  userName: string;
}

class Header extends React.Component<IProps> {
  public render() {
    return (
      <NavBar>
        <WrapperLink to="/">
          {this.props.userName !== "" ? "Logout" : ""}
        </WrapperLink>
      </NavBar>
    );
  }
}

const NavBar = styled.div`
  background-color: ${COLORS.NAV_BAR};
  height: 40px;
`;

const WrapperLink = styled(Link)`
  float: right;
  text-decoration: none;
  margin: 2px 20px 2px 0;
  font-size: 25px;
`;

export default connect(
  mapStateToProps,
  null
)(Header);
