import React from "react";

import Header from "../components/Header";
import Background from "../components/Background";
import cardMaker from "../utility/Cards";

import styled from "styled-components";

const Main = () => {
  const movies1 = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      title: "The Old Guard",
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Greyhound",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      title: "Archive",
    },
    {
      id: 4,
      image:
        "https://www.themoviedb.org/t/p/w500/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
      title: "The Wrong Missy",
    },
    {
      id: 5,
      image:
        "https://www.themoviedb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
      title: "A Man Named Otto",
    },
    {
      id: 6,
      image:
        "https://www.themoviedb.org/t/p/w500/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
      title: "Enola Holmes",
    }
  ];
  const movies2 = [
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Greyhound",
    },
    {
      id: 5,
      image:
        "https://www.themoviedb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
      title: "A Man Named Otto",
    },
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      title: "The Old Guard",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      title: "Archive",
    },
    {
      id: 4,
      image:
        "https://www.themoviedb.org/t/p/w500/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
      title: "The Wrong Missy",
    },

    {
      id: 6,
      image:
        "https://www.themoviedb.org/t/p/w500/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
      title: "Enola Holmes",
    }
  ];
  const movies3 = [
    {
      id: 6,
      image:
        "https://www.themoviedb.org/t/p/w500/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
      title: "Enola Holmes",
    },
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      title: "The Old Guard",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      title: "Archive",
    },
    {
      id: 4,
      image:
        "https://www.themoviedb.org/t/p/w500/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
      title: "The Wrong Missy",
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Greyhound",
    },
    {
      id: 5,
      image:
        "https://www.themoviedb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
      title: "A Man Named Otto",
    }
  ];

  return (
    <Container>
      <Background />
      <Header login={false} user={true}/>
      <div className="body flex column a-center j-center">
        <div className="category">
          <h1>Trending</h1>
          <div className="row">
            {movies1.map((item) => cardMaker(item))}
          </div>
        </div>
        <div className="category">
          <h1>New Releases</h1>
          <div className="row">
            {movies2.map((item) => cardMaker(item))}
          </div>
        </div>
        <div className="category">
          <h1>Recently Added</h1>
          <div className="row">
          {movies3.map((item) => cardMaker(item))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: calc(100vh - 70px);
  top: 70px;
  width: 100vw;
  min-width: 768px;
  position: relative;
  .body {
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
  }
  h1 {
    color: white;
    font-size: 2.125rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
  .category {
    margin-bottom: 2rem;
    height: 350px;
    .row {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: hidden;
      .card {
        margin-right: 1rem;
        img {
          width: 200px;
          height: 300px;
          object-fit: cover;
          transition: all 0.5s ease-in-out;
          &:hover {
            width: 400px;
          }
        }
      }
    }
  }
`;
