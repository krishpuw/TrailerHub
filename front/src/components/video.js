import React from 'react'
import useMovieById from '../hooks/useMovieid'
import { useSelector } from 'react-redux'

const Video = ({movieId}) => {
  const trailer = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId)
  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video'
    //    src= "https://www.youtube.com/embed/xcJtL7QggTI?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1"
       src={`https://www.youtube.com/embed/${trailer?.key}?si=U7BhTfM8RT7OP1wO&autoplay=1&mute=1`}
         title="YouTube video player" 
         frameborder="0" 
        allowfullscreen></iframe>
        
    </div>
  )
}

export default Video