import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";

import Logo from "../assets/Logo.png";
import ProfileImg from "../assets/ProfileImg.png";

const Header = ({ login, user, player }) => {
  const [clicked, setClicked] = useState(false);
  const [returnHome, setReturnHome] = useState(false);
  const navigate = useNavigate();
  const handleProfileImgClick = () => {
    navigate("/signup");
  };


  return (
    <Container>
      {clicked && <Navigate to="/login" />}
      {returnHome && <Navigate to="/" />}
      <Wrapper className="headerWrapper">
        {player ?
          <ReturnArrow
          onClick={() => setReturnHome(true)}
          />
          :
          <img src={Logo} alt="Logo"
        />}
        <div className="logInLink">
          {login && <button onClick={() => setClicked(true)}>Log In</button>}
        </div>
        {user && (
          <div className="profileImg">
            <img
              src={ProfileImg}
              alt="User"
              onClick={(e) => handleProfileImgClick()}
            />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  @media (max-width: 768px) {
    padding: 0 10px;
    width: 100vw;
  }
  img {
    width: 150px;
    @media (max-width: 768px) {
      width: 100px;
    }
  }
  .logInLink {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e50914;
      width: fit-content;
      height: 30px;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.1875rem;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #8f0007;
      }
      @media (max-width: 768px) {
        font-size: 1rem;
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
  width: 95%;
  margin: 0 auto;
`;

const ReturnArrow = styled(FaArrowLeft)`
  font-size: 36px;
  cursor: pointer;
  color: #414141;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #8a8a8a;
    font-size: 40px;
  }
`;
