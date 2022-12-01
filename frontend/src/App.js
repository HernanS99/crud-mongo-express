import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './views/Login';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Nav from './components/Nav';
import AdminPage from './views/AdminPage';
import UserPage from './views/UserPage';
import { useContext, useEffect, useState } from 'react';
import Register from './views/Register';
import UserContext from './context/UserContext';
import Products from './views/Products';
import Product from './components/ProductSinglePage'
import Cart from './views/Cart'

function App() {
  const context = useContext(UserContext)
  const token = context.userState.token


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      context.validateToken(token)
    }
    context.getUserInfo(token)
  }, [])
  return (
    <div>
      <Nav>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/products/:id'
            element={<Product />}
          />

          {!token && (
            <Route
              path='/register'
              element={<Register />}
            />
          )}
          {!token && (
            <Route
              path='/login'
              element={<Login />}
            />
          )}
          {token && (
            <Route
              path='/user'
              element={<UserPage />}
            />
          )}

          <Route
            path='/admin'
            element={<AdminPage />}
          />
          <Route
            path='/Cart'
            element={<Cart />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </Nav>
    </div>
  )
}

export default App;
