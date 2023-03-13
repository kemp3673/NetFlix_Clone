import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const Player = ({urlID}) => {
  let videoCode = window.location.href.split("=")[1];
  videoCode = 'dpzEimY-TeI';
  return (
    <Container>
      <Header player={true}/>

      <PlayerWrapper>
        <iframe src={`https://www.youtube.com/embed/${videoCode}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`} title="The Last of Us | Official Trailer | HBO Max" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </PlayerWrapper>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  height: 100vh;
  background-color: black;
  width: 100vw;
  min-width: 768px;
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
  height: calc(100vh - 140px);
  iframe {
    width: 100%;
    height: 100%;
  }
`;
