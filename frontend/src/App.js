import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom'
import Login from './views/Login';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Nav from './components/Nav';
import AdminPage from './views/AdminPage';
import { useState } from 'react';
import Register from './views/Register';

function App() {
  
  return(
    <div>
      <Nav>
        <Routes>
            <Route
              path='/' 
              element={<Home />}
            />
            <Route
              path='/Login'
              element={<Login />}
            />
            <Route
              path='/Register'
              element={<Register />}
            />
            <Route
              path='/Admin'
              element={<AdminPage />}
            />
            <Route 
              path='*' 
              element={<NotFound/>}
            />
        </Routes>
      </Nav>
    </div>
  )
}

export default App;
