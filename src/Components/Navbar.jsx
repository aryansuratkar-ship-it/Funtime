import React from 'react'
import {  Search } from 'lucide-react';    
import { Logs } from 'lucide-react';
import {Link} from 'react-router-dom'
 


const Navbar = ({searchItem,setsearchItem,handleSearch}) => {


  return (
  <div className='flex bg-amber-300 h-15 w-full text-black    items-center justify-between'>
    <div className='h-20 w-30 flex justify-center items-center'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/7/73/Funtime_Entertainment_Logo.png' ></img>
    </div>
    <div className='flex  justify-center items-center '>
      <input className='h-7.5 w-100   pl-2 cursor-pointer outline-black  rounded text-base text-black flex justify-center items-center  bg-gray-200' Type='text'placeholder='search'
      value={searchItem}
      onChange={(e)=>{setsearchItem(e.target.value)}}
      ></input>
    <button className='cursor-pointer h-7.5   text-black '
    
    onClick={handleSearch}
    ><Search /></button>
    </div>
   <div className='flex  text-2xl justify-center items-center gap-3 pr-3'>
     <Link to="/Help" className='cursor-pointer'>HELP</Link>
    <div>
      
      <p  className='cursor-pointer'> <Logs /></p>
      
    </div>
   </div>
    </div>
  
  )
}

export default Navbar