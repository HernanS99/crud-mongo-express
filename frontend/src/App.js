import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom'
import Login from './components/Login';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Nav from './components/Nav';
import AdminPage from './views/AdminPage';
import { useState } from 'react';

function App() {
  const {token, setToken} = useState(null)
  
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
