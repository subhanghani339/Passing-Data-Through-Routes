import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Signup from '../Screens/Signup'
import Login from '../Screens/Login'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router