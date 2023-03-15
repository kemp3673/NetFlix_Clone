import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utility/firebase-config.js";
import Background from "../components/Background";
import Header from "../components/Header";

import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const errorHandling = (message) => {
    switch (message) {
      case "invalid-email":
        setError("Invalid email");
        break;
      case "user-not-found":
        setError("User not found");
        break;
      case "wrong-password":
        setError("Wrong password");
        break;
      default: setError(message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formValues.email, formValues.password).then(
        (response) => {
          localStorage.setItem('NotFlix-loggedIn', 'true');
          setIsLoggedIn(true);
          setValidated(true);
        }
      );
    } catch (error) {
      const message = error.message.split("/")[1].split(")")[0].trim();
      console.error("Error in Login: ", message);
      errorHandling(message);
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
              <div className="resetPassword">
                <p onClick={() => navigate("/password-reset")}>Reset Password?</p>
              </div>
              {error && <Error className="error">{error}</Error>}
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
  width: 100vw;
  position: relative;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: clip;
  .content {
    background-color: rgba(0, 0, 0, 0.75);
    width: 300px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 40px 40px;
    @media (max-width: 768px) {
      width: 100vw;
      height: 100%;
      padding: 0;
    }
    @media (max-height: 500px) {
      width: 100vw;
      height: 100vh;
    }
  }
  .body {
    @media (max-width: 768px) {
      width: 100vw;
      height: 100%;
    }
  }
  .form {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    @media (max-width: 768px) {
      width: 80%;
      padding: 0 20px;
    }

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
      @media (max-width: 768px) {
        font-size: 1rem;
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
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }
  }
  .finePrint {
    text-align: left;
    padding: 10px;
    @media (max-width: 768px) {
      width: 80%;
      padding: 0 20px;
    }
    h4 {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      color: #737373;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    h6 {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      color: #737373;
      @media (max-width: 768px) {
        font-size: 0.5rem;
      }
    }
  }
  .resetPassword {
    width: 80%;
    margin-bottom: 1rem;
    color: #737373;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const Button = styled.button`
  background-color: #e50914;
  width: fit-content;
  color: white;
  border: none;
  padding: 0.3rem .5rem;
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
  @media (max-width: 768px) {
        font-size: 1rem;
      }
`;

const Error = styled.p`
  color: red;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;