import React, { useEffect } from "react";

import Header from "../components/Header";
import Background from "../components/Background";
// import CardMaker from "../utility/Cards";
import Category from "../components/Category";
import { freeMovies } from "../assets/freeMovies";

import styled from "styled-components";

// To have the row array move over to next not fully visible card, instead of simply incrementing by ++, take screen size and divide by card width, round down, and this will give how many cards are in the viewport. Increment array counter by this number to get next starting index to make row navigation more modern.

// Math.floor(window.innerWidth / card_width[200]) ... Need to account for padding and margin of cards.

const Main = () => {
  const [popular, setPopular] = React.useState(null);
  const [trending, setTrending] = React.useState(null);
  const [horror, setHorror] = React.useState(null);
  const [romance, setRomance] = React.useState(null);
  const [comedy, setComedy] = React.useState(null);
  const [action, setAction] = React.useState(null);
  const [family, setFamily] = React.useState(null);

  // Simplify genre fetches into one function that takes in genre id as parameter and returns array of movies for that genre.
  // find way to minimize number of fetches to API.
  const genreList = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    ScienceFiction: 878,
    TVMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37
  };

  // TODO move fetches to API file and convert to axios
  const getGenreMovies = async (genre) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=24414d8fd189b8a9cd3125c1ec11b248&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre}&region=US&adult=false`);
    const data = await response.json();
    return data.results;
  }

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=24414d8fd189b8a9cd3125c1ec11b248&language=en-US&page=1&region=US&adult=false`);
    const data = await response.json();
    setPopular(data.results);
  }
  const getTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=24414d8fd189b8a9cd3125c1ec11b248&region=US&adult=false`);
    const data = await response.json();
    setTrending(data.results);
  }



  // TMDB API
  useEffect (() => {
    getPopularMovies();
    getTrendingMovies();
    getGenreMovies(genreList.Horror).then((data) => setHorror(data));
    getGenreMovies(genreList.Romance).then((data) => setRomance(data));
    getGenreMovies(genreList.Comedy).then((data) => setComedy(data));
    getGenreMovies(genreList.Action).then((data) => setAction(data));
    getGenreMovies(genreList.Family).then((data) => setFamily(data));
  }, [genreList.Action, genreList.Comedy, genreList.Family, genreList.Horror, genreList.Romance]);

  return (
    <Container>
      <Background />
      <Header login={false} user={true}/>
      <Wrapper className="body flex column a-center j-center">
      <Category title="Free Movies" movies={freeMovies} />
      {trending && <Category title="Trending Trailers" movies={trending} />}
      {popular && <Category title="Popular Trailers" movies={popular} />}
      {romance && <Category title="Romance Trailers" movies={romance} />}
      {comedy && <Category title="Comedy Trailers" movies={comedy} />}
      {action && <Category title="Action Trailers" movies={action} />}
      {family && <Category title="Family Trailers" movies={family} />}
      {horror && <Category title="Horror Trailers" movies={horror} />}
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  min-width: 768px;
  position: relative;
  .body {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    position: absolute;
    top: 70;
    left: 0;
    display: flex;
    flex-direction: column;
    /* padding-left: 1rem; */
  }
  h1 {
    color: white;
    font-size: 2.125rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  top: 70px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;


