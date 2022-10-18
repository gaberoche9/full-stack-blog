import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZxAudETYbkr5ade3ujpJOUK6_hkQINTI",
    authDomain: "my-react-blog-7c67d.firebaseapp.com",
    projectId: "my-react-blog-7c67d",
    storageBucket: "my-react-blog-7c67d.appspot.com",
    messagingSenderId: "51139951246",
    appId: "1:51139951246:web:fb2705cd0207338930a7df"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
