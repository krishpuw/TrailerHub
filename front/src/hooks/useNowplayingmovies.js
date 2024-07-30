//import React from 'react';
import axios from 'axios';
import { getNowPlayingMovies } from '../redux/movieSlice';
import { playingMovies, options } from '../utils/constant';

import {useDispatch} from 'react-redux';

const useNowPlayingMovies = async()=>{
    const dispatch = useDispatch();
    try{
      const response = await axios.get(playingMovies,options);
       console.log(response.data.results);
      dispatch(getNowPlayingMovies(response.data.results));
    }catch(error){
      console.log(error);
    }
  }
  
export default useNowPlayingMovies;