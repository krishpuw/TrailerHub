import React from 'react'

const Video = () => {
  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video'
         src="https://www.youtube.com/embed/pDddlvCfTiw?si=U7BhTfM8RT7OP1wO&autoplay=1&mute=1"
         title="YouTube video player" 
         frameborder="0" 
        allowfullscreen></iframe>
        
    </div>
  )
}

export default Video