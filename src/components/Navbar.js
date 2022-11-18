import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import "../components/style.css"
import "./main.scss";

const MainNavbar = () => {
  const navigate =useNavigate("")

  return (
    <>
    <section className='nav-section'>
        <div className='navbar text-center'>
            <ul className='bg-transparent text-center'>

              <div className="right-row w-75 flex bg-transparent items-center">
                <li className='bg-transparent'><img className='h-10 w-15 mt-2 bg-transparent' src="../image/funolympics.png" alt="" /></li>
              <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/">Fun Olympics</NavLink></li>
                <li className='bg-transparent'><NavLink className='text-decoration-none bg-transparent text-red-500' to="/">Home</NavLink></li>
                


              </div>
              
               <div className="left-row w-25 flex bg-transparent items-center">

             
                <li className='bg-transparent'><button className='button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0' onClick={()=>navigate("/login")}>Log-In</button></li>
                <li className='bg-transparent'><button className='button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0' onClick={()=>navigate("/register")}>Sign-Up</button></li>
                </div> 
               
            </ul>
        </div>
        
    </section>



     
    </>
  )
}

export default MainNavbar