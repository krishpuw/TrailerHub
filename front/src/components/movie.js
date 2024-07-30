import React from 'react'
import List from './List'
import { useSelector } from 'react-redux'

const Movie = () => {
  const trailer = useSelector(store=>store.movie);
  console.log(trailer);
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <List title={"Popular Trailer"} movies={trailer.popularmovies}  />
      <List title={"New Trailers"} movies={trailer.nowPlayingMovies}  />
      <List title={"Top Rated Trailers "} movies={trailer.toprated}  />
        <List title={"Upcomming Movies"} movies={trailer.upcomming}  />

      </div>

    </div>
  )
}

export default Movie