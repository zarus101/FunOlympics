import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { doLogout, getCurrentUserDetail, isLoggedIN } from '../../auth/Index'

const AdminNav = () => {
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
              <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/dashboard">Fun Olympics</NavLink></li>
                
                <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/dashboard">Home</NavLink></li>
                <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/competition">Competition</NavLink></li>
                <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/category">category</NavLink></li>
                <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/users">List of Users</NavLink></li>
                <li className='bg-transparent'><NavLink className=' bg-transparent text-decoration-none  hover:text-red-500 text-red-500' to="/admin/contacts">List of Contacts</NavLink></li>
                


              </div>
              
               <div className="left-row w-25 flex bg-transparent items-center">

               <li className='bg-transparent'><p className='bg-transparent mt-3 text-red-500'>{user.email}</p></li>
                <li className='bg-transparent'><button className='button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0' onClick={logout}>logout</button></li>
                </div> 
               
            </ul>
        </div>
        
    </section>










    {/* <section className='nav-section'>
        <div className='navbar'>
            <ul>
                <li><NavLink to="/admin/dashboard">Home</NavLink></li>
                <li><NavLink to="/admin/competition">Competition</NavLink></li>
                <li><NavLink to="/admin/category">category</NavLink></li>
                <li><NavLink to="/admin/users">List of Users</NavLink></li>
                
                <li><button onClick={logout}>logout</button></li>
                <li><>{user.email}</></li>
            </ul>
        </div>
    </section> */}
   </>
  )
}

export default AdminNav