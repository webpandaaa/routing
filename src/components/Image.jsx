import React, { useState } from 'react';
import axios from "../helpers/axios";
import { useEffect } from 'react';

const Image = () => {

  const [ images , setimages] = useState([]);
  const [ page , setpage] = useState(1);
   

const getimages = async () =>{
    try{
      const {data} = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      setimages(data);

    }catch(error){
      console.log(error);
    }
}

let renderimages = "Loading..";
if(images.length > 0){
    renderimages = images.map((image) => (
      <div className='relative   gap-5 mt-5 border-2 w-[15%] p-5  bg-red-200 ' key={image.id}>
        <img src={image.download_url} alt="" />
        <small>{image.author}</small>
      </div>
    ));
}

useEffect(() => {
  getimages();
}, [page]);
   

return (
    <div>
      <h1 className='text-2xl'>Image page</h1>
      <button className='mt-5 bg-green-300 px-5 py-2' onClick={getimages}>Show images</button>
      <br />
      <div className='relative flex flex-wrap w-half p-3  gap-5'>{renderimages}</div>
      <div className='text-center p-10'>
        <span
        onClick={() => page > 1 && setpage(page - 1)} 
        className='cursor-pointer text-blue-400 text-3xl mr-10'>
          Prev
        </span>
        <span
        onClick={() => setpage(page + 1)} 
        className='cursor-pointer text-blue-400 text-3xl mr-10'>
          Next
        </span>
        
      </div>
    </div>
  )
}

export default Image
