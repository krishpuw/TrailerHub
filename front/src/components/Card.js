import React from 'react'
import { bannerURL } from '../utils/constant'

const Card = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
        <img src={`${bannerURL}/${posterPath}`} alt='banner'/>

    </div>
  )
}

export default Card