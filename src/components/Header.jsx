import React from "react";
import styled from "styled-components";

import Logo from "../assets/Logo.png";
import ProfileImg from "../assets/ProfileImg.png";

const Header = ({login, user}) => {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Logo" />
        <div className="logInLink">
          {login && <a href="/login">Log In</a>}
        </div>
        {user && <div className="profileImg"><img src={ProfileImg} alt="User" /></div>}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75));
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  font-size: 14px;
  position: absolute;
  top: -70px;
  left: 0;
  right: 0;
  z-index: 3;
  img {
    width: 150px;
  }
  .logInLink {
    a {
      letter-spacing: 1.42px;
      text-decoration: none;
      color: white;
      background-color: red;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 3px;
      transition: all 0.2s ease 0s;
      &:hover {
        background-color: #8f0007;
      }
    }
  }
  .profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 1.5rem;
    img {
      width: 110%;
      height: 110%;
      translate: -3px;
      object-fit: cover;
    }
    &:hover {
      cursor: pointer;
      width: 45px;
      height: 45px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:   75%;
  margin: 0 auto;
`;

