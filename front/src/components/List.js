import React from 'react'
import Card from './Card'
const List = ({ title, movies}) => {
    console.log(movies);
    return (
        <div className='px-8'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className=' flex overflow-x-auto cursor-pointer no-scrollbar'>
                <div className='flex items-center'>
                    {
                        movies?.map((movie)=> {
                            return(
                                <Card key={movie.id} posterPath={movie.poster_path}  />
                            )
                        }
                        )
                    }
                    </div>
                    </div>
            </div>
    )
    
}

export default List;