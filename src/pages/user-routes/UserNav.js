import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate } from 'react-router-dom'

import { doLogout, getCurrentUserDetail, isLoggedIN } from '../../auth/Index'


const UserNav = (args) => {
    const navigate= useNavigate("")

    const logout=()=>{
        doLogout(()=>{
            navigate("/")
        })
    }
    const [login, setLogin]= useState(true)

    const [user,setUser]= useState(false)
  

 

    useEffect(() => {
        setLogin(isLoggedIN())
        setUser(getCurrentUserDetail())

  
    }, [login])
  return (
   <>
    <section className='nav-section'>
        <div className='navbar text-center'>
            <ul className='bg-transparent text-center'>

              <div className="right-row w-75 flex bg-transparent items-center">
                <li className='bg-transparent'><img className='h-10 w-15 mt-2 bg-transparent' src="../image/funolympics.png" alt="" /></li>
              <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/user/dashboard">Fun Olympics</NavLink></li>
                <li className='bg-transparent'><NavLink className='text-decoration-none bg-transparent text-red-500' to="/user/dashboard">Home</NavLink></li>
                <li className='bg-transparent'><NavLink className='bg-transparent text-decoration-none text-red-500' to={`/user/changePassword/${user.id}`}>change password</NavLink></li>
                


              </div>
              
               <div className="left-row w-25 flex bg-transparent items-center">

               <li className='bg-transparent'><p className='bg-transparent mt-3 text-red-500'>{user.name}</p></li>
                <li className='bg-transparent'><button className='button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0' onClick={logout}>logout</button></li>
                </div> 
               
            </ul>
        </div>
        
    </section>




    {/* </div>





    <div className="navbar bg-gray-800">
        <Nav className="nav-container h-16 px-8 flex items-center">
          <div onClick={() => navigate("/")} className="logo items-start">
            <p className="text-red-600 font-bold text-start hover:cursor-pointer">
              Fun Olympics
            </p>
          </div>
          <div onClick={() => navigate("/user/dashboard")} className="logo items-start">
            <p className="text-red-600 font-bold text-start hover:cursor-pointer">
              Home
            </p>
          </div>
          <div className="logo items-start">
            <p className="text-red-600 font-bold text-start hover:cursor-pointer">
            <NavLink to={`/user/changePassword/${user.id}`}>change password</NavLink>
            </p>
          </div>
          <div></div>
        
         
          <div className=" flex navbuttons col-sm float-right items-end right-0">
          <p className='p bg-transparent text-red-600 font-bold text-lg'>{user.name}</p>
            <button
              onClick={logout}
              className="button mx-5 h-10 w-20 font-semibold text-red-600 bg-gray-700  hover:bg-gray-900"
            >
              Log-oUT
            </button>
           
          </div>
        </Nav>
      </div> */}
   </>
  )
}

export default UserNav