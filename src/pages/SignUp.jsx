import React, { useState } from "react";
import Cookies from "js-cookie";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utility/firebase-config.js";
import { validateForm } from "../utility/validateForm.js";
import Background from "../components/Background";
import Header from "../components/Header";

import styled from "styled-components";
import { Navigate } from "react-router-dom";

// Temp default test user for testing
// const defaultUser = {
//   email: "test@test.com",
//   password: "123abc!",

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const errorHandling = (message) => {
    switch (message) {
      case "email-already-in-use":
        setError("Email already in use");
        break;
      case "invalid-email":
        setError("Invalid email");
        break;
      case "weak-password":
        setError("Password must be at least 6 characters");
        break;
      default: setError(message);
    }
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formValidated = validateForm(formValues.email, formValues.password);
    if (formValidated === true) {
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(auth, email, password).then(
          (response) => {
            Cookies.set("NotFlix-loggedIn", true, { expires: 7 });
            setValidated(true);
          }
        );
      } catch (error) {
        const message = error.message.split("/")[1].split(")")[0].trim();
        errorHandling(message);
        console.error("Error in account creation: ", message);
      }
    } else {
      errorHandling(formValidated);
      console.error("Error in account creation: ", formValidated);
    }
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(true);
  };

  return (
    <Container>
      <Background showBackgroundImg={true} />
      <Header login={true} />
      {validated && <Navigate to="/" />}
      <div className="body flex column a-center j-center">
        <div className="content">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h4>Or at least we used to.</h4>
            {!error ? (
              <h6>
                Don't have an account? Enter your email to create or restart
                your membership.
              </h6>
            ) : (
              <h6 style={{ color: "red" }}>{error}</h6>
            )}
          </div>
          <div className="form">
            <form>
              {showPassword && (
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}
              {showPassword ? (
                <Button onClick={(e) => handleSignUp(e)}>Create Account</Button>
              ) : (
                <Button onClick={(e) => handleShowPassword(e)}>
                  Get Started
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
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
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h4 {
      font-size: 1.625rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
    h6 {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  .form {
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    input {
      background-color: #333;
      color: white;
      border: none;
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.1875rem;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.25;
      margin-bottom: 0.5rem;
      @media (max-width: 475px) {
        width: 60%;
      }
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
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #8f0007;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
  }
`;
