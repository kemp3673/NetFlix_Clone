import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import youtubeAPI from "../api/youtube.js";

const CardMaker = (data) => {
  const [clicked, setClicked] = useState(false);
  const [url, setUrl] = useState("");
  const posterImg = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  const backdropImg = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

  let summary = data.overview;
  if (summary.length > 430) {
    summary = summary.substring(0, 430) + "...";
  }

  const getVideoFile = async () => {
    console.log('data', data);
    const response = await youtubeAPI.get("/search", {
      params: {
        q: `${data.title} trailer`,
        },
    }).then((response) => {
      setUrl(response.data.items[0].id.videoId);
    }).catch((error) => {
      setUrl('error');
    });
  };

  const handleClick = () => {
    // Check if youtube url is already present from stored data
    if (!data.urlID) {
        //Make call to youtube api
      getVideoFile().then(() => {
        setClicked(true);
      });
    } else {
    setUrl(data.urlID);
    setClicked(true)
    }
  };

  return (
    <Card
      className="card"
      onClick={() => handleClick()}
    >
      {clicked && <Navigate to={`/player/movie=${url}`} />}
      <DefaultImg
        src={posterImg}
        className="posterImg"
        alt={data.title}
        key={data.id}
      />
      <BackDropWrapper className="backdropWrapper">
        <BackdropImg
          src={backdropImg}
          alt={data.title}
          className="backdropImg"
        />
        <span>{data.title}</span>
        <p>{summary}</p>
      </BackDropWrapper>
    </Card>
  );
};

export default CardMaker;

const Card = styled.div`
  position: relative;
  margin-right: 0.5rem;
  cursor: pointer;
  width: 200px;
  height: 300px;
  transition: all 0.5s ease-in-out;
  &:hover {
    width: 500px;
    .backdropImg {
      width: 500px;
      opacity: 1;
    }
    .posterImg {
      opacity: 0;
      width: 500px;
    }
    .backdropWrapper {
      opacity: 1;
      width: 500px;
    }
  }
  @media (max-width: 768px) {
      width: 150px;
      height: 210px;
    }
`;

const DefaultImg = styled.img`
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 300px;
  transition: opacity 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
  @media (max-width: 768px) {
      width: 150px;
      height: 210px;
    }
`;

const BackdropImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 300px;
  transition: all 0.5s ease-in-out;
`;

const BackDropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(500px - 2rem);
    height: 50px;
    color: white;
    text-shadow: 2px 2px 2px black;
    font-weight: 900;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    font-size: 1.2rem;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(500px - 2rem);
    min-height: 100px;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-shadow: 3px 3px 3px black;
    font-weight: 400;
    display: flex;
    text-align: justify;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 0 1rem;
  }
`;
