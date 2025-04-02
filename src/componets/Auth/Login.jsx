import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email ,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(email," ",password)
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className='border-2 rounded-4xl border-emerald-600 p-20 rounded-100'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='outline-none placeholder-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter Your Email'/>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='outline-none placeholder-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl m-4' type="password" placeholder='Enter Password'/>
                <button className= 'mt-5 !bg-emerald-600 text-white border-2 border-emerald-700 rounded-full py-3 px-6 text-xl'>Log in</button>
            </form>
        </div>
    </div>
  
)
}

export default Login