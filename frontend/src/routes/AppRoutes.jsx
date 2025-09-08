import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/users/Login'
import Register from '../pages/users/Register'
import SellerLogin from '../pages/sellers/SellerLogin'
import SellerRegister from '../pages/sellers/SellerRegister'
import SellerProfile from '../pages/sellers/SellerProfile'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/seller/profile/:id' element={<SellerProfile />} />
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/login' element={<SellerLogin />} />
    </Routes>
  )
}

export default AppRoutes
