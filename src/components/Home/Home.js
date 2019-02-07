import React from "react";
import img from "../img/backgroundImg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeMenu from "./HomeMenu";

const Main = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 40px;
  color: white;
`;

const Nav = styled.div`
  text-align: right;
  padding-right: 30px;
  margin-bottom: 40px;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 50px;
`;

const Buttom = styled.button`
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  background-color: purple;
  border: none;
  color: white;
  &: hover {
    cursor: pointer;
    background-color: white;
    color: purple;
  }
`;

const Home = () => {
  return (
    <Main>
      <Nav>
        <HomeMenu />
      </Nav>
      <div>
        <img
          src="https://img.icons8.com/ios/150/000000/weightlift-filled.png"
          alt="Weight Lifting"
        />
      </div>
      <Header>
        <H1>FitMe</H1>
        <span> Easy way to track and organize your workouts. </span>
      </Header>

      <Link to="/sign-up">
        <Buttom>Get Started</Buttom>
      </Link>
    </Main>
  );
};

export default Home;
