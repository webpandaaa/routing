import React from 'react'
import axios from "../helpers/axios";
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

  const [ users , setusers] = useState([]);
   

const getusers = async () =>{
    // axios
    // .get("https://jsonplaceholder.typicode.com/users")
    // .then((res) => console.log(res.data))
    // .catch((err) => console/log(err));
    try{
      const {data} = await axios.get(
        "/users"
      );
      setusers(data);

    }catch(error){
      console.log(error);
    }
}

let renderusers = "Loading..";
if(users.length > 0){
    renderusers = users.map((user) => (
      <div className='relative   gap-5 mt-5 border-2 w-[15%] p-5  bg-red-200 ' key={user.id}>
        <h1 className='text-1xl'>{user.name}</h1>
        <small>{user.email}</small>
      </div>
    ));
}
   





  return (
    <div>
      <h1 className='text-2xl'>Home page</h1>
      <button className='mt-5 bg-green-300 px-5 py-2' onClick={getusers}>Show Users</button>
      <br />
      <div className='relative flex flex-wrap w-half p-3  gap-5'>{renderusers}</div>
    </div>
  )
}

export default Home
