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

  height: 100%;
  width: 100vw;
  background-color: #151515;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;