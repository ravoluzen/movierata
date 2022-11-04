import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (query) => {
    console.log('hiy')
    const response = await movieApi
    .get(`?apikey=${APIKey}&s=${query}&type=movie`)

    return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (query) => {
    const response = await movieApi
    .get(`?apikey=${APIKey}&s=${query}&type=series`)

    return response.data
})

export const fetchMovieOrShowDetail = createAsyncThunk('movies/fetchMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)

    return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled")
            return { ...state, shows: payload }
        },
        [fetchMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled")
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer

// intially the state is an empty object
// we create a slice with a reducer "addMovies"
// addMovies accepts state and payload
// where state.movies = payload
// we export getAllMovies which returns state.movies.movies
// getAllMovies is called in MovieListing component inside a useSelector