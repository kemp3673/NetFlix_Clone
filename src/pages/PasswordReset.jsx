import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utility/firebase-config.js";
import Header from "../components/Header";
import Background from "../components/Background";
import styled from "styled-components";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 5000);
      });
    } catch (error) {
      const message = error.message.split("/")[1].split(")")[0].trim();
      switch (message) {
        case "invalid-email":
          setErrorMessage("Invalid email address");
          break;
        case "user-not-found":
          setErrorMessage("No account found with that email address");
          break;
        case "missing-email":
          setErrorMessage("Please enter an email address");
        break;
        default:
          setErrorMessage(
            "There was a problem resetting your password. Please try again later."
          );
      }
      console.error("Error in password reset: ", message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <Container>
      <Background showBackgroundImg={true} />
      <Body className="body">
        <Header login={true} />
        <h1>Reset Password</h1>
        <h4>Enter your email address below to reset your password.</h4>
        <form>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={(e) => handleReset(e)}>Reset Password</button>
        </form>
        {sent || errorMessage ? null : <div style={{ height:"50px" }}></div>}
        {sent && <p style={{ color: "green" }}>Password reset email sent!</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Body>
    </Container>
  );
};

export default PasswordReset;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: clip;
`;

const Body = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h4 {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      width: 100%;
    }
  }
  button {
    background-color: #e50914;
    width: fit-content;
    color: white;
    border: none;
    padding: 0.3rem 0.5rem;
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
`;
