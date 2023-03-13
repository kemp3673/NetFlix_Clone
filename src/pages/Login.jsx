import React, { useState } from "react";
import Background from "../components/Background";
import Header from "../components/Header";

import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (formValues.email && formValues.password) {
      setValidated(true);
    }
  };

  return (
    <Container>
      <Background showBackgroundImg={true} />
      <Header />
      {signUp && <Navigate to="/signup" />}
      {validated && <Navigate to="/" />}
      <div className="body flex column a-center j-center">
        <div className="content">
          <div className="form">
            <form>
              <h1>Sign In</h1>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <div className="remember">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <Button onClick={(e) => handleLogin(e)}>Sign In</Button>
            </form>
          </div>
          <div className="finePrint">
            <h4>
              New to Notflix?{" "}
              <SignInLink onClick={() => setSignUp(true)}>Sign up now.</SignInLink>
            </h4>
            <h6>
              This page is not protected by Google reCAPTCHA. This website is a personal project to clone Netflix. It is not affiliated with Netflix in any way.
            </h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  /* top: 70px; */
  width: 100vw;
  min-width: 768px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background-color: rgba(0, 0, 0, 0.75);
    width: 300px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 40px 40px;
  }
  .form {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;

    input {
      background-color: #333;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.1875rem;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 0.5rem;
      width: 80%;
      &:focus {
        border: 2px solid white;
      }
    }
    label {
      color: #707070;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25;
      margin-right: 1.5rem;
    }
    h1 {
      font-size: 2.125rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1rem;
      color: white;
    }
  }
  .finePrint {
    text-align: left;
    padding: 10px;
    h4 {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      color: #737373;
    }
    h6 {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      color: #737373;
    }
  }
  .remember {
    display: grid;
    grid-template-columns: 1fr 8fr;
    width: 80%;
    margin-bottom: 1rem;
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

const SignInLink = styled.button`
  color: #e50914;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
