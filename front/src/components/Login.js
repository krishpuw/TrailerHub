
// import {React,useState} from 'react'

// import Header from "./Header"

// import axios from "axios";
// import { API_END_POINT } from '../utils/constant';

// import toast from "react-hot-toast"

// import {useNavigate} from "react-router-dom";

// import {useDispatch, useSelector} from "react-redux"
// import { setLoading, setUser } from '../redux/userSlice';

import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';


const Login = () => {
  const [isLogin,setIsLogin] = useState(false);

  const LoginHandle = () => {
    setIsLogin(!isLogin);
  }

  const [Fullname,SetFullName] = useState("");
  const [Email,SetEmail] = useState("");
  const [Password,SetPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(store=>store.app.isLoading);

  // const [Oldpass,Newpass] = useState(true);

  // const ForgotHandle = ()=> {
  //   Newpass(!Oldpass);

  // }

  // const getInputData = async (e)=>{
  //       e.preventDefault();
  //       dispatch(setLoading(true));
  //       if(isLogin){
  //           //login
  //           const user = {Email,Password}; 
  //           try {
  //               const res = await axios.post(`${API_END_POINT}/login`, user,{
  //                   headers:{
  //                       'Content-Type':'application/json'
  //                   },
  //                   withCredentials:true
  //               });
  //               if(res.data.success){
  //                   toast.success(res.data.message);
  //               }
  //               dispatch(setUser(res.data.user));
  //               nav("/browse");
  //           } catch (error) {
  //             const errorMessage = error.response?.data?.message || 'An unexpected error occurred. Please try again later.';
  //             toast.error(errorMessage);
  //             console.error(error);
  //             // toast.error(error.response.data.message);
  //             //   console.log(error);
  //           } finally {
  //               dispatch(setLoading(false));
  //           }
  //       }else{
  //           //register
  //           dispatch(setLoading(true));
  //           const user = {Fullname, Email, Password};
  //           try {
  //               const res = await axios.post(`${API_END_POINT}/register`,user,{
  //                   headers:{
  //                       'Content-Type':'application/json'
  //                   },
  //                   withCredentials:true
  //               });
  //               if(res.data.success){
  //                   toast.success(res.data.message);
  //               }
  //               setIsLogin(true);
  //           } catch (error) {
  //               toast.error(error.response.data.message);
  //               console.log(error);
  //           } finally{
  //               dispatch(setLoading(false));
  //           }
  //       }
  //       SetFullName("");
  //       SetEmail("");
  //       SetPassword("");
  //   }
  const getInputData = async(e)=> {
    e.preventDefault();
    dispatch(setLoading(true));
    if(isLogin){
      //login 
      try{
        const log = await axios.post(`${API_END_POINT}/login`,{Email,Password},{
          headers:{
              'Content-Type':'application/json'
          },
          withCredentials:true
      });

        console.log(log);
       if(log.data.success){
         toast.success(log.data.message);
       }
        dispatch(setUser(log.data.user));
        nav("/browse");
      }catch(error){
        toast.success(error.response.data.message);
        console.log(error);

      }
      finally{
        dispatch(setLoading(false));
      };
    } else{
      dispatch(setLoading(true));
      try{
        const res = await axios.post(`${API_END_POINT}/register`,{Fullname,Email,Password},{
          headers: {
            'Content-Type':'application/json'
          },
          withCredentials:true
        });
        console.log(res);
      //toast.success(res.data.message);
          if(res.data.success){
             toast.success(res.data.message);
       }
       setIsLogin(true);

      }catch(error){
        toast.error(error.response.data.message);
        console.log(error);

      } finally{
        dispatch(setLoading(false));
      }
  }
//    console.log(Fullname,Email,Password);
   SetFullName("");
   SetPassword("");
   SetEmail("");

  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[55vw]' src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg' alt="cover"/>
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 left-0 right-0   items-center  absolute justify-center mx-auto top-11 p-12 bg-black opacity-90 rounded-md'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login":"SignUp"}</h1> 
          <div className='flex flex-col '>
            {
              !isLogin&& <input value={Fullname} onChange={(e)=>SetFullName(e.target.value)} type='text' placeholder='Fullname' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/> 
            }
            
            <input type='email' value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder='Email' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/>
            <input type='password' value={Password} onChange={(e)=>SetPassword(e.target.value)} placeholder='Password' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/>

            <button className='bg-red-600 p-2 text-white rounded-sm font-medium mt-5'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>

            <p className='text-white mt-2'> {isLogin ? "New To KrishFlix?" : "Already Have a account -> "}<span onClick={LoginHandle} className='ml-1 text-blue-900 cursor-pointer'>{isLogin ?  "Signup Here!":"Login"}</span> </p>

     
          </div>
        </form>
    </div>
  )
}

// //   return (
// //     <div>
// //         <Header />
// //         <div className='absolute'>
// //             <img className='w-[100vw] h-[50vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
// //         </div>
// //         <form onSubmit={getInputDatat} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
// //             <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
// //             <div className='flex flex-col'>
// //                 {
// //                     !isLogin && <input value={Fullname} onChange={(e)=>SetFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
// //                 }
// //                 <input value={Email} onChange={(e)=>SetEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
// //                 <input value={Password} onChange={(e)=>SetPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
// //                 <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLogin ? "loading...":(isLogin?"Login":"Signup")}`}</button>
// //                 <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={LoginHandle} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
// //             </div>
// //         </form>
// //     </div>
// // )
// }

export default Login;