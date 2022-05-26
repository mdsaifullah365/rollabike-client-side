import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from "react-query/devtools";
import axios from 'axios';

// const baseURL = 'http://localhost:5000';
const baseURL = `https://rollabike.herokuapp.com`;

// axios defaults
axios.defaults.baseURL = baseURL;
axios.defaults.headers.authorization = `Bearer ${localStorage.getItem(
  'accessToken'
)}`;
// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
