import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { setToggle } from '../redux/movieSlice'

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector(store=>store.movie.toggle);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }
  const toggleHandle = () => {
    dispatch(setToggle());

  }
  //  alert('working') // alert brings a something out on the tinge

  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black px-6'>
      <img
        className='w-56'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
        alt='logo'
      />
      {
        user && (
          <div className='flex items-center'>
            <IoIosArrowDropdownCircle size="24px" color='white' />
            <h1 className='text-lg font-medium text-white'>{user.Fullname}</h1>
            <div className='ml-4'>
              <button onClick={handleLogout} className='bg-red-700 text-white px-4 py-2'>Logout</button>
              <button onClick={toggleHandle} className='bg-red-700 text-white px-4 py-2 ml-2'>{toggle?"Home" : "Search Movie"}</button>
            </div>

          </div>
        )
      }
    </div>
  )

}



export default Header;