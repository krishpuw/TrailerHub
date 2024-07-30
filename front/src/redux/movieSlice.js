import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies:null,
        popularmovies:null,
        toprated: null,
        upcomming:null,
        toggle:false,

    
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
            state.toggle = !state.toggle;        }
    }

});
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomming,setToggle}= movieSlice.actions;
export default movieSlice.reducer;
