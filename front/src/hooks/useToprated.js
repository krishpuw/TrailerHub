import axios from "axios"
import {useDispatch} from 'react-redux'
import { options, topRated } from "../utils/constant";
import { getTopRatedMovies } from "../redux/movieSlice";

const useTopRated = async() => {
    const dispatch = useDispatch();
    try{
        const response = await axios.get(topRated,options);
        dispatch(getTopRatedMovies(response.data.results))

    }catch(error){
        console.log(error)
    }

}

export default useTopRated;