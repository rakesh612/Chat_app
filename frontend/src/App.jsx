import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import SettingsPage from './pages/settingsPage.jsx'
import ProfilePage from './pages/profilePage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'
import { useEffect } from 'react'
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";

const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();
  const {theme} = useThemeStore();
  useEffect(() => {
    checkAuth();
  },[checkAuth]);

  console.log(isCheckingAuth && !authUser);

  if(isCheckingAuth && !authUser)
  {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }

  return (
    <div data-theme={theme}>
      
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />}/>
        <Route path="/signup" element={!authUser ?<SignUpPage />:<Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ?<LoginPage />:<Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
      
      <Toaster />
    </div>
  )
}

export default App
