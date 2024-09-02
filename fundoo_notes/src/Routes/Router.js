import React from 'react'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import  Dashboard  from '../Pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import Archives from '../Components/archives/Archives';
import DeleteNotes from '../Components/delete/DeleteNotes';
import { SendAndArchiveSharp } from '@mui/icons-material';
import ForgotPassword from '../Pages/ForgotPassword';

export default function Router(){
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><SignUp /></AuthRoute>} />
        <Route path='/forgotpassword' element={<AuthRoute><ForgotPassword/></AuthRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="archive" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="trash" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
