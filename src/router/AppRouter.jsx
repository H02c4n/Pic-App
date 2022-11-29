import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../pages/Cart'
import Photos from '../pages/Photos'

const AppRouter = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Photos/>} />
            <Route path='cart' element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter