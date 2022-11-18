import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'
import { doLogout, getCurrentUserDetail, isLoggedIN } from '../../auth/Index'
import "./user.scss"

const UserFooter = () => {
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
    <section className="footer-section">
    <div className="footer__col1 bg-transparent">
      <Container>
        <img
          className="h-10 w-15 mt-2 bg-transparent"
          src="./image/funolympics.png"
          alt=""
        />
        <br />
        <p className="text-justify text-red-500">
        The Olympic Games are an international sports festival, held every four years. The ultimate goals are to cultivate human beings, through sport, and contribute to world peace. Summer Games and Winter Games are held separately.
        </p>
      </Container>
    </div>
    <div className="footer__col2 bg-transparent">
      <div className="sec-heading">
        <h1>important links</h1>
      </div>
      <ul>
          <li><NavLink className='text-decoration-none bg-transparent text-red-500' to="/user/dashboard">Home</NavLink></li>
          <li><NavLink className='text-decoration-none bg-transparent text-red-500' to={`/user/changePassword/${user.id}`}>Change-Password</NavLink></li>
          <li><p className='text-decoration-none bg-transparent text-red-500' onClick={logout}>Log-Out</p></li>
   
        
      </ul>
    </div>
    <div className="footer__col3 bg-transparent">
      <div className="sec-heading">
        <h1>Contact Info</h1>
      </div>
      <ul>
        <li>..............</li>
        <li>..............</li>
        <li>..............</li>
      </ul>
    </div>
    <div className="footer__col4 bg-transparent">
      <div className="sec-heading">
        <h1>Social Links</h1>
      </div>
      <ul>
        <li className='text-decoration-none bg-transparent text-red-500' to="/">Facebook</li>
        <li className='text-decoration-none bg-transparent text-red-500' to="/">Instagram</li>
        <li className='text-decoration-none bg-transparent text-red-500' to="/">Linkedln</li>
      </ul>
    </div>
  </section>

  )
}

export default UserFooter