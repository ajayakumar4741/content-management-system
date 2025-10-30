import React from 'react'
import { Button } from "@/components/ui/button"
import NavBar from './ui_components/NavBar'
import Header from './ui_components/Header'
import BlogContainer from './ui_components/BlogContainer'
import Footer from './ui_components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui_components/AppLayout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
