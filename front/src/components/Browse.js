import React from 'react'
import Header from './Header'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useEffect} from 'react';
import Main from './main';
import Movie from './movie';
import axios from "axios";
import { playingMovies, options } from '../utils/constant';

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();
  const nowPlayingMovies = async()=>{
    try{
      const response = await axios.get(playingMovies,options);
      console.log(response.data.results);

    }catch(error){

    }
  }

  useEffect(() => {
      if (!user) {
          navigate("/");
      }
      nowPlayingMovies();
  }, [user,navigate]);
  return (
      <div >
          <Header />
          <div>
            <Main/>
            <Movie />
          </div>
      </div>
  )
}

export default Browse