import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Player = ({urlID}) => {
  let videoCode = window.location.href.split("=")[1];

  useEffect (() => {
    if (videoCode === 'l73rmrLTHQc') {
      console.error('There was a problem retrieving the video.');
    alert('Sorry, there was a problem retrieving the video. Please try again later. In the meantime, enjoy this video of baby pandas!');
    }
  }, [videoCode]);

  return (
    <Container>
      <Header player={true}/>
      <PlayerWrapper>
        <iframe src={`https://www.youtube.com/embed/${videoCode}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`} title="embedded player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
    </PlayerWrapper>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  height: 100vh;
  background-color: black;
  width: 100vw;
  position: relative;
  overflow-y: clip;
  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

const PlayerWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  iframe {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
      top: 30px;
      height: calc(100vh - 30px);
    }
`;
