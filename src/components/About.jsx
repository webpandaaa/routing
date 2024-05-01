import React from 'react'
import {Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1 className='text-2xl'> Details </h1>
        <ul className='m-5 list-none'>
            <li className='mb-2 list-item'>
                <Link to="/Details/1">Book 1</Link>
            </li>
            <li className=' mb-2 list-item'>
                <Link to="/Details/2">Book 2</Link>
            </li>
            <li className='list-item'>
                <Link to="/Details/3">Book 3</Link>
            </li>
        </ul>
        <hr />
    
    </div>
  )
}

export default About
