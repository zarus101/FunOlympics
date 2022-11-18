import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIN } from '../../auth/Index';

const UserPrivate = () => {



    return isLoggedIN() ? <Outlet/>: <Navigate to={"/login"}/>

}

export default UserPrivate