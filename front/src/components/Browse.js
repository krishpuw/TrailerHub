import React from 'react'
import Header from './Header'
import { useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {useEffect} from 'react';
import Main from './main';
import Movie from './movie';
import useNowPlayingMovies from '../hooks/useNowplayingmovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useToprated from '../hooks/useToprated';
import useUpcoming from '../hooks/useUpcoming';
import Search from './search';


const Browse = () => {
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();
  
  const toggle = useSelector(store=>store.movie.toggle);
//hooks
  useNowPlayingMovies();
  usePopularMovies();
  useToprated();
  useUpcoming();

  useEffect(() => {
      if (!user) {
          navigate("/");
      }
     // nowPlayingMovies();
  }, []);
  return (
      <div >
          <Header />
          <div>
            {
              toggle ? <Search/>:(
              <>
                <Main/>
                <Movie />
              </>
              )
            }
          </div>
      </div>
  )
}

export default Browse

