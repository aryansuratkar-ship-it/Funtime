import React, { useEffect } from 'react'

import Card from './Card'
import { useState } from 'react'
import Navbar from './Navbar'

const MovieDetail = () => {

  useEffect( () => {
    api();
  },[])

  const [Data, setData] = useState([])
  const [searchItem, setsearchItem] = useState('')

const api =  async (query = 'batman') => {
  const apiData = await fetch (`http://www.omdbapi.com/?s=${query}&apikey=2431483a`)
  const response = await apiData.json()
  console.log(response)
  setData(response.Search || [])
}

const handleSearch = (e) => {
  e.preventDefault()
  api(searchItem);

}

  return (
    <div id='right' className='h-full w-full flex overflow-y-auto   flex-wrap justify-center gap-5 items-center bg-black text-amber-50'>
       
<Navbar
searchItem={searchItem}
setsearchItem={setsearchItem}
handleSearch={handleSearch}
/>
        {Data.length > 0 ? Data.map((e,index)=>       
         (
           <Card 
           key={index}
           Title={e.Title}
           Year={e.Year}
           Poster={e.Poster}
           />
       ) ) : <p>No Result Found . .</p>
      
      }
    
        
        </div>
  )
}

export default MovieDetail