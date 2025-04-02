import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOut=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
  }

  return (
    <div className='flex items-end text-white justify-between '>
        <h1 className='text-2xl '>HELLO <br /><span className='text-3xl font-semibold'>How Is Your Day👋🏼</span></h1>
        <button onClick={logOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-b-sm'>LOG OUT</button>
    </div>
  )
}
export default Header