import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui_components/AppLayout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SignupPage from './pages/SignupPage'
import CreatePostPage from './pages/CreatePostPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './ui_components/ProtectedRoute'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="blogs/:slug" element={<DetailPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/create_post' element={<ProtectedRoute><CreatePostPage /></ProtectedRoute>} />
      <Route path='/login' element={<LoginPage />} />
      {/* <Route path="profile" element={<ProfilePage />} /> */}
    </Route>

      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
