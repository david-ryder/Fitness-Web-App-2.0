import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"

import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App