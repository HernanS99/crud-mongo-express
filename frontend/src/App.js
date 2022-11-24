import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom'
import Login from './views/Login';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Nav from './components/Nav';
import AdminPage from './views/AdminPage';
import UserPage from './views/UserPage';
import { useContext, useState } from 'react';
import Register from './views/Register';
import UserContext from './context/UserContext';
import Products from './views/Products';
import Product from './components/ProductSinglePage'

function App() {
  const context = useContext(UserContext)
  const token = context.userState.token
  return(
    <div>
      <Nav>
        <Routes>
            <Route
              path='/' 
              element={<Home />}
            />
            <Route
              path='/Products' 
              element={<Products />}
            />
            <Route
              path='/Products/:id' 
              element={<Product />}
            />
            
            {!token && (
              <Route
              path='/Register'
              element={<Register />}
            />
            )}
            {!token && (
              <Route
              path='/Login'
              element={<Login />}
            />
            )}
            {token && (
              <Route
              path='/User'
              element={<UserPage />}
            />
            )}
            
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
