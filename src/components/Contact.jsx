import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../helpers/axios";



const Contact = () => {

    const navigate = useNavigate();
    const [ posts , setposts] = useState([]);

    const submitHandler = () =>{
        navigate("/home")
        console.log("hello");
    }

    const getposts = async () =>{
      // axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      // .then((res) => console.log(res.data))
      // .catch((err) => console/log(err));
      try{
        const {data} = await axios.get(
          "/posts"
        );
        console.log(data);
        setposts(data)
        
  
      }catch(error){
        console.log(error);
      }
    }

    let renderposts = "Loading..";
   if(posts.length > 0){
    renderposts = posts.map((user) => (
      <div className='relative bg-red-200 gap-5 mt-5 border-2 w-[15%] p-5  ' key={user.id}>
        <h1 className='text-1xl'>{user.id}</h1>
        <small>{user.title}</small>
      </div>
    ));
   }

  return (
    <div>
      <h1 className='text-2xl'>This is Contact page</h1>

        <button className='bg-red-300 p-2 mt-5'  onClick={submitHandler}>Home page</button> <br /> 
        <button className='mt-3 bg-green-300 px-5 py-2' onClick={getposts}>Show posts</button>
        <br />
        <div className='relative flex-wrap  flex w-half p-3  gap-5'>{renderposts}</div>
    </div>
  )
}

export default Contact
