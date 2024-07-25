
import {React,useState} from 'react'

import Header from "./Header"

import axios from "axios";
import { API_END_POINT } from '../utils/constant';

const Login = () => {
  const [isLogin,setIsLogin] = useState(false);

  const LoginHandle = () => {
    setIsLogin(!isLogin);
  }

  const [Fullname,SetFullName] = useState("");
  const [Email,SetEmail] = useState("");
  const [Password,SetPassword] = useState("");

  //const [Oldpass,Newpass] = useState(true);

  // const ForgotHandle = ()=> {
  //   Newpass(!Oldpass);

  // }
  const getInputDatat = async(e)=> {
    e.preventDefault();
    if(isLogin){
      //login 
      try{
        const log = await axios.post(`${API_END_POINT}/login`,{Email,Password});
        console.log(log);

      }catch(error){
        console.log(error);

      }
    } else{
      try{
        const res = await axios.post(`${API_END_POINT}/register`,{Fullname,Email,Password});
        console.log(res);
      }catch(error){
        console.log(error);

      } 
  }
    //console.log(Fullname,Email,Password);
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
        <form onSubmit={getInputDatat} className='flex flex-col w-3/12 my-36 left-0 right-0   items-center  absolute justify-center mx-auto top-11 p-12 bg-black opacity-90 rounded-md'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login":"SignUp"}</h1> 
          <div className='flex flex-col '>
            {
              !isLogin&& <input value={Fullname} onChange={(e)=>SetFullName(e.target.value)} type='text' placeholder='Fullname' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/> 
            }
            
            <input type='email' value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder='Email' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/>
            <input type='password' value={Password} onChange={(e)=>SetPassword(e.target.value)} placeholder='Password' className='p-3 outline-none my-2 rounded-sm bg-gray-800 text-white'/>

            <button className='bg-red-600 p-2 text-white rounded-sm font-medium mt-5'>{isLogin ? "Login":"SignUp"}</button>

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