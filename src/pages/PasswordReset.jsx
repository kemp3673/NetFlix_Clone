import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import styled from "styled-components";

const PasswordReset = () => {
  return (
    <Container>
      <Background showBackgroundImg={true} />
      <Body className="body">
        <Header login={true}/>
        <h1 style={{ border:"2px solid red", backgroundColor:"red", padding:"10px"}}>Work In Progress...</h1>
        <h1>Reset Password</h1>
        <h4>Enter your email address below to reset your password.</h4>
        <form>
          <input type="email" placeholder="Email address" />
          <button>Reset Password</button>
        </form>
      </Body>
    </Container>
  );
}

export default PasswordReset;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Body = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
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
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;
        padding: 0 1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    button {
      width: fit-content;
      height: 50px;
      border: none;
      border-radius: 5px;
      background-color: #e50914;
      color: white;
      font-size: 1.5rem;
      font-weight: 400;
      cursor: pointer;
    }

`;