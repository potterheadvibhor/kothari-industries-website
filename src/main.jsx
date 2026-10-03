import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, MemoryRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// HashRouter keeps the site fully static: every page works on any host
// without server rewrite rules. Swap for BrowserRouter if your host
// redirects all paths to index.html and you want clean URLs.
// VITE_PREVIEW=1 is only used to build the embedded preview, where the
// browser address bar is not available. Normal builds use HashRouter.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
