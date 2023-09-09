import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD81cXzEB-GUximY9kuZQELOMdbaRqhgPo",
  authDomain: "proyecto-coder-ovalles.firebaseapp.com",
  projectId: "proyecto-coder-ovalles",
  storageBucket: "proyecto-coder-ovalles.appspot.com",
  messagingSenderId: "174445904005",
  appId: "1:174445904005:web:25ab8a8365f913093fe9ec",
  measurementId: "G-68K3YZ8C80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
