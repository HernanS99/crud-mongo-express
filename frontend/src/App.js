import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom'
import Login from './components/Login';
import NotFound from '../views/NotFound';
import Home from './views/Home';

function App() {
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
    path='*' 
    element={<NotFound/>}
    />
  </Routes>
}

export default App;
