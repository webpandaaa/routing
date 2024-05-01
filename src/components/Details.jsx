import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams();
    const Navigate = useNavigate();
    const {pathname} = useLocation();
    console.log(location);
  return (
    <div>
       <h1 className='text-2xl' >Details</h1>
       <h1 className='text-xl mt-5' >
        Book id : <span className='font-extrabold'> {id}</span>
       </h1>
       <button className='mt-3 bg-green-300 px-5 py-2 ' onClick={ ()=> Navigate(-1)}> Go back</button>
      
    </div>
  )
}

export default Details
