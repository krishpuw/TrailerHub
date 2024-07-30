// import axios from "axios"
// import {useDispatch} from 'react-redux'
// import { options, popularMovies } from "../utils/constant"
// import { getPopularMovies } from "../redux/movieSlice";

// const usePopularMovies = async() =>{
//     const dispatch = useDispatch();
//     try{
//         const response = await axios.get(popularMovies,options);
//         dispatch(getPopularMovies(response.data.results))
//     }
//     catch(error){
//         console.log(error);
//     }
// }


// export default usePopularMovies;

import axios from "axios";
import {popularMovies,options} from '../utils/constant';
import {getPopularMovies} from '../redux/movieSlice';
import {useDispatch} from "react-redux";

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(popularMovies, options);
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies