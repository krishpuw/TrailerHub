import axios from "axios"
import {useDispatch} from 'react-redux'
import { options, upComming } from "../utils/constant";
import { getUpcomming } from "../redux/movieSlice";

const useUpcoming = async() => {
    const dispatch = useDispatch();
    try{
        const response = await axios.get(upComming,options);
        dispatch(getUpcomming(response.data.results))

    }catch(error){
        console.log(error);
    }
}

export default useUpcoming;