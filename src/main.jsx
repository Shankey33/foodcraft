import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodState from './context/FoodContext.jsx'
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import logoFavicon from './assets/logo.png';

// Dynamically set (or replace) the favicon to avoid 404s when deploying under a non-root base path (e.g. GitHub Pages)
// const ensureFavicon = (href) => {
//   if (typeof document === 'undefined') return;
//   let link = document.querySelector("link[rel~='icon']");
//   if (!link) {
//     link = document.createElement('link');
//     link.rel = 'icon';
//     document.head.appendChild(link);
//   }
//   if (link.href !== href) {
//     link.href = href;
//   }
// };
// ensureFavicon(logoFavicon);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <FoodState>
      <App />
    </FoodState>
    </HashRouter>
  </StrictMode>
)
