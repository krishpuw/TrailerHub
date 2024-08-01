import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies:null,
        popularmovies:null,
        toprated: null,
        upcomming:null,
        toggle:false,
        trailerMovie:null,

    
    },
    reducers: {
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload
    },
        getPopularMovies:(state,action)=>{
            state.popularmovies=action.payload
    
        },
        getTopRatedMovies:(state,action)=>{
            state.toprated=action.payload
    },
        getUpcomming:(state,action)=>{
            state.upcomming=action.payload
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;      
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        }
    }

});
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomming,setToggle,getTrailerMovie}= movieSlice.actions;
export default movieSlice.reducer;
