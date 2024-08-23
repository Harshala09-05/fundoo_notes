import React from 'react'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import  Dashboard  from '../Pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

export default function Router(){
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<AuthRoute><Login/></AuthRoute>}/>
        <Route path='/signup' element={<AuthRoute><SignUp /></AuthRoute>} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            </Routes>
    </BrowserRouter>
  )
}
