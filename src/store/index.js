import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    trendingMovies: [],
    popularMovies: [],
    genres: [],
    selectedGenre: null,
    selectedMovie: null,
};

export const fetchTrending = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=24414d8fd189b8a9cd3125c1ec11b248&region=US&adult=false");
        const data = await response.json();
        console.log(data.results);
        return data.results;
    }
);

export const fetchPopular = createAsyncThunk(
    "movies/fetchPopular",
    async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=24414d8fd189b8a9cd3125c1ec11b248&language=en-US&page=1");
        const data = await response.json();
        // MoviesSlice.setPopularMovies(data.results);
        console.log(data.results);
        return data.results;
    }
);

// export const fetchMoviesByGenre = createAsyncThunk(
//     "movies/fetchMoviesByGenre",
//     async () => {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/28?api_key=24414d8fd189b8a9cd3125c1ec11b248&language=en-US&page=1`);
//         const data = await response.json();
//         console.log(data.results);
//         return data.results;
//     }
// );

const MoviesSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        setTrendingMovies: (state) => {
            state.trendingMovies = fetchTrending();
        },
        setPopularMovies: (state) => {
            state.popularMovies = fetchPopular();
        },
    }
});

export const {setTrendingMovies, setPopularMovies} = MoviesSlice.actions;

export const store = configureStore({
    reducer: {
        movies: MoviesSlice.reducer,
    }
});
