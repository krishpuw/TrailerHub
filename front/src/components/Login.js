import React, { useState } from 'react'

import Header from "./Header"

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
  const getInputDatat = (e)=> {
    e.preventDefault()
    console.log(Fullname,Email,Password);
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

export default Login