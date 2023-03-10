import React, { useState } from "react";
import Background from "../components/Background";
import Header from "../components/Header";

import styled from "styled-components";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      setValidated(true);
    }
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(true);
  };


  return (
    <Container>
      <Background showBackgroundImg={true}/>
      <Header login={true}/>
      {validated && <Navigate to="/" />}
      <div className="body flex column a-center j-center">
        <div className="content">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h4>Or at least we used to.</h4>
            <h6>
              Don't have an account? Enter your email to create or restart your
              membership.{" "}
            </h6>
          </div>
          <div className="form">
            <form>
              <input type="email" placeholder="Email address" name="email" onChange={e => setEmail(e.target.value)}/>
              {showPassword && <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}/>}
              {showPassword ? <Button onClick={e => handleLogin(e)}>Create Account</Button> : <Button onClick={e => handleShowPassword(e)}>Get Started</Button>}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: calc(100vh - 70px);
  top: 70px;
  width: 100vw;
  min-width: 768px;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .text {
    padding: 0 36px;
    color: white;
    h1 {
      font-size: 3.125rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 0.5rem;
    }
    h4 {
      font-size: 1.625rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
    }
    h6 {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
    }
  }
  .form {
    margin-bottom: 1.5rem;
    input {
      background-color: #333;
      color: white;
      border: none;
      margin-left: 1.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.1875rem;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 0.5rem;
      &:focus {
        border: 2px solid white;
      }
    }
  }

`;

const Button = styled.button`
  background-color: #e50914;
  width: fit-content;
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
`;