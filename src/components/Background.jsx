import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/Background.jpeg';

const Background = ({showBackgroundImg}) => {
  return (
    <Container>
      {showBackgroundImg && <img src={backgroundImage} alt="Background" />}
    </Container>
  );
}

export default Background;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  min-width: 768px;
  background-color: #1a1a1a;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;