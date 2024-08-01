import React from 'react'
import Title from './title'
import Video from './video'
import { useSelector } from 'react-redux'

const Main = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie){
    return;
  }
  console.log(movie);
 const {overview,title,id} = movie[8];
  return (
    <div>
        <Title title ={title} overview={overview} />
        <Video movieId = {id}/>

    </div>
  )
}

export default Main