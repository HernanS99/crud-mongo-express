import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './context/UserProvider';
import CartProvider from './context/CartProvider';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider options={{"client-id":"AegcGndB1-sveYXxsHbAa5e97pvbwVLaNy_R6HtPpTh5FnxBpVv9wk7JwMXGSMzb_2ZXs47zx9SCY8WT"}}>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </PayPalScriptProvider>
);

