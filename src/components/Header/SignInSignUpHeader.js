import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const Header = styled.div`
  text-align: center;
  padding: 50px 0 10px;
`;

const Img = styled.img`
  width: 200px;
`;

const SignInSignUpHeader = () => {
  return (
    <Header>
      <Img src={logo} alt="FitMe Logo" />
    </Header>
  );
};

export default SignInSignUpHeader;
