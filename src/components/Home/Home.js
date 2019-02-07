import React from "react";
import img from "../img/backgroundImg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeMenu from "./HomeMenu";
import logo from "../img/logo.png";

const Main = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 40px;
  color: white;
`;

const Nav = styled.div`
  text-align: right;
  padding-right: 30px;
  margin-bottom: 40px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 400px;
`;

const Buttom = styled.button`
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  background-color: #47508f;
  border: none;
  color: white;
  &: hover {
    cursor: pointer;
    background-color: white;
    color: #47508f;
  }
`;

const Home = () => {
  return (
    <Main>
      <Nav>
        <HomeMenu />
      </Nav>
      <Header>
        <Img src={logo} alt="FitMe Logo" />
        <span> Easy way to track and organize your workouts. </span>
      </Header>

      <Link to="/sign-up">
        <Buttom>Get Started</Buttom>
      </Link>
    </Main>
  );
};

export default Home;
