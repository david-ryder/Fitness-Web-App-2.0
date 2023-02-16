import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import axios from 'axios'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserHome from './pages/UserHome';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/:username' element={<UserHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App