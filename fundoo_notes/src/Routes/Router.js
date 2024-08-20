import React from 'react'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import  Dashboard  from '../Components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router(){
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
    </BrowserRouter>
  )
}
